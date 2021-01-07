import React from "react";

// reactstrap components
import { Alert, Container } from "reactstrap";

const Message = ({ color, children }) => {
    const [alert1, setAlert1] = React.useState(true);
  
    return (
      <>
        <div className="section section-notifications">
          <Alert color={color} isOpen={alert1}>
            <Container>
              {children}
              <button
                type="button"
                className="close"
                onClick={() => setAlert1(false)}
              >
                <span aria-hidden="true">
                  <i className="now-ui-icons ui-1_simple-remove"></i>
                </span>
              </button>
            </Container>
          </Alert>
        </div>
      </>
    );
  }

  export default Message