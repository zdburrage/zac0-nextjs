import { Row, Col, Button, Input, Label } from 'reactstrap';
import { useSearchParams } from 'next/navigation'
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';

export default function VerificationForm() {

    const [formData, setFormData] = useState({
        last4: '',
        loanId: '',
    });

    const router = useSearchParams();
    const state = router.get('state');
    const details = decodeSessionToken(router);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`/api/management/users/update?user_id=${details.sub}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log(data);
    };

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };


    return (
        <form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Label htmlFor="last4SSN">Last 4 of SSN</Label>
                </Col>
                <Col>
                    <Input id="last4SSN" type="number" name="last4SSN" value={formData.last4} onChange={handleInputChange} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Label htmlFor="loanId">Loan ID</Label>
                </Col>
                <Col>
                    <Input id="loanId" name="loanId" value={formData.loanId} onChange={handleInputChange} />
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Button style={{ 'margin': '5%' }} className="form-button" type="submit">
                    Submit
                </Button>
                <Col></Col>
            </Row>
        </form>
    );
}


function decodeSessionToken(router) {
    return jwtDecode(router.get('session_token'));
}