import React from "react";
function Title({name,title}){
    return(
        <div className="rom">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold">
                    {name}<strong className="text-blue" style={{ margin:'0px 35px' }}>{title}</strong>
                </h1>

            </div>

        </div>
    )
}
export default Title;
