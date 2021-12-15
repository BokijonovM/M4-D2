import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'

export default function MySearch() {
    return (
        <>
            <div>
                <Form className="d-flex mx-5 my-4">
                    <FormControl style={{
                        width: "250px"
                    }}
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>
        </>
    )
}
