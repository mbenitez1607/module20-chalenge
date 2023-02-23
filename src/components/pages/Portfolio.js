import React from 'react';
import Project from "../Project";

export default function Portfolio() {
  return (
    <div>      
        <div>
            <div className="row">
                <div className="col-lg">
                    <Project />
                </div>
                <div className="col-lg">
                    <Project />
                </div>
            </div>
            <div className="row">
                <div className="col-lg">
                    <Project />
                </div>
                <div className="col-lg">
                    <Project />
                </div>
            </div>
            <div className="row">
                <div className="col-lg">
                    <Project />
                </div>
                <div className="col-lg">
                    <Project />
                </div>
            </div>
        </div>

        </div>
  );
}
