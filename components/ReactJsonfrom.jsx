import React, { Component } from "react";
import { render } from "react-dom";
import Form from "react-jsonschema-form";
import PropTypes from 'prop-types';
import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from 'react-collapsible-component'


/* schema */
const schema = {
  "type": "object",
  "title": "A Simple Form with JSON Schema",
  "properties": {
    "personInfo": {
      "type": "object",
      "title": "Person Information",
      "required": [
          "firstName",
          "lastName"
      ],
      "properties": {
        "firstName": {
          "type": "string",
          "title": "First Name"
        },
        "lastName": {
          "type": "string",
          "title": "Last Name"
        },
        "gender": {
          "type": "integer",
          "title": "Age"
        },
        "age": {
          "type": "string",
          "title": "Gender",
          "enum":["Male", "Female"]
        },
      }
    },
    "contactInfo": {
      "type": "object",
      "title": "Contact Information",
      "properties": {
        "email":{
          "type": "string",
          "title": "Email"
        },
        "telephone": {
          "type": "string",
          "title": "Telephone",
          "minLength": 10
        }
      }
    }

  }
};

/* UI Schema */
const uiSchema = {
    "personInfo":{
      "firstName":{
          "classNames": "col-sm-6"
      },
      "lastName":{
          "classNames": "col-sm-6"
      },
      "gender":{
          "classNames":"col-sm-6"
      },
      "age":{
          "classNames":"col-sm-3"
      }
    },
    "contactInfo":{
      "email":{
          "classNames": "col-sm-6"
      },
      "telephone":{
          "classNames": "col-sm-6"
      }
    },
    "ui:buttons": [{
                "type": "button",
                "title": "Cancel"

          },
          {
                "type": "button",
                "title": "Save and continue"

          },
          {
                "type": "submit",
                "title": "Submit"
          }
    ]
};

/* Form Data */
const formData = {
  "firstName": "Siva",
  "lastName": "Ram",
  "age": 28,
  "email": "sivaram.aptech@gmail.com",
  "phone": "8019133783"
}


const log = (type) => console.log.bind(console, type);




function CustomFieldTemplate(props) {
  const {id, classNames, label, displayLabel, help, required, rawDescription, errors, children} = props;
  return (
    <div className={classNames}>
      <div>
        {displayLabel ? (<label htmlFor={id}>{label}{required ? "" : null}</label>) : null }
        {children}
        {errors}
        {help}
      </div>
    </div>
  );
}

function ObjectFieldTemplate(props) {
  //console.log(props)
  return (
   <div className="panel panel-primary">
     <CollapsibleComponent >
        <CollapsibleHead >{props.title}</CollapsibleHead>
            <CollapsibleContent isExpanded={true}>
                  {props.properties.map(element =>
                        <div key={element.content.key}>{element.content}</div>)}
            </CollapsibleContent>

    </CollapsibleComponent>
    </div>
  );
}

function transformErrors(errors) {
  return errors.map(error => {
    if (error.name === "pattern") {
      error.message = "Only digits are allowed"
    }
    return error;
  });
}


function validateRecursive(formData, localErrors, localSchema, localFormData) {
  if (localSchema["booleanValidation"] != null) {
    if (localFormData != localSchema["booleanValidation"]) {
      localErrors.addError(localSchema["booleanValidationErrorMessage"]);
    }
  }
  for (var k in localSchema) {
    if (typeof localSchema[k] == "object" && localSchema[k] !== null) {
      if (localErrors[k]) {
              localErrors[k] = validateRecursive(formData, localErrors[k], localSchema[k], localFormData[k]);
          }
          else {
            localErrors = validateRecursive(formData, localErrors, localSchema[k], localFormData);
          }
    }
  }
  return localErrors;
}


function validate(formData, errors) {
  return validateRecursive(formData, errors, schema, formData);
}


function changeForm(data) {
  console.log(JSON.stringify(data));
}

/**  Form **/
export default class ReactJsonfrom extends Component {


  componentDidMount() {
  }

  render() {
    let buttons = [];
    uiSchema["ui:buttons"] && uiSchema["ui:buttons"].forEach( (button) => {
          buttons.push(<button key={button.type} type={button.type}  className={button.type==='submit'?'btn btn-primary':'btn btn-default'}>{button.title}</button>);
    });
    console.log(buttons)
    return (
    <div>
      <Form schema={schema}
          uiSchema={uiSchema}
          onError={log("errors")}
          validate={validate}
          transformErrors={transformErrors}
          showErrorList={false}
          liveValidate={true}
          FieldTemplate={CustomFieldTemplate}
          ObjectFieldTemplate={ObjectFieldTemplate}
          >
        </Form>
      <div>
            {buttons}
      </div>
      </div>

    );
  }
}
