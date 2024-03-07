import { useForm, ValidationError } from "@formspree/react";
import { Row, Col, Button, Input, Label } from 'reactstrap';
import AnchorLink from './AnchorLink';
import { useSearchParams } from 'next/navigation'
import {jwtDecode} from 'jwt-decode';

export default function VerificationForm() {
    const [state, handleSubmit] = useForm("v_form");
    const router = useSearchParams();
    var details = decodeSessionToken(router);

    if (state.succeeded) {
        return <p>Thanks for your submission!</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Label htmlFor="last4SSN">Last 4 of SSN</Label>
                </Col>
                <Col>
                    <Input id="last4SSN" type="number" name="last4SSN" />
                </Col>
                <ValidationError prefix="Last 4 SSN" field="last4SSN" errors={state.errors} />
            </Row>
            <Row>
                <Col>
                    <Label htmlFor="loanId">Loan ID</Label>
                </Col>
                <Col>
                    <Input id="loanId" name="loanId" />
                </Col>
                <ValidationError prefix="Loan ID" field="loanId" errors={state.errors} />
            </Row>
            <Row>
                <Col></Col>
                <Button style={{'margin': '5%'}} className="form-button" type="submit" disabled={state.submitting}>
                    Submit
                </Button>
                <Col></Col>
            </Row>
            <ValidationError errors={state.errors} />
        </form>
    );
}


function handleSubmit() {
    //TODO
}

function decodeSessionToken(router) {
    var token = jwtDecode(router.get('session_token'));
    var state = router.get('state');
    console.log(token);
    console.log(state);
}