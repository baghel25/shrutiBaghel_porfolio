import React from 'react';
import { Card } from 'react-bootstrap';

const Summary = () => (
  <Card>
    <Card.Body className='p-body-container project shadow-lg p-3 mb-5 bg-white rounded border-0' background="tranparent">
      {/* <Card.Title className="my-4 m-title" >Software Engineer</Card.Title> */}
      <Card.Text>
      <div className="second-col">
                <div className="text-wrapper m-l-20">
                        <div className="s-description">
                    Deltecs Infotech pvt ltd September 2020 - Present
        
                    Created procedures for system monitoring, recovery, backup and optimization.
                    Worked with software development and testing team members to design and develop robust solutions to meet.
                    Checked client code for bugs and weaknesses using approved troubleshooting methods.</div>
                    </div>
                      
                </div>
      </Card.Text>
    </Card.Body>
  </Card>
);

export default Summary;
