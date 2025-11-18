import React from "react";

const Payment = () =>
{
    return (
        <div>
            <h4>Payment Page</h4>


            <div className="d-flex justify-content-center">


            <div class="card text-white bg-secondary mb-3" style={{width: "30rem"}}>
  <div class="card-header">
    Payment Options
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
         <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label " for="flexRadioDefault1">
    Google Pay
  </label>
</div>
    </li>

    
    <li class="list-group-item">
        <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label className="form-check-label" for="flexRadioDefault2">
   Phone Pe
  </label>
</div>


    </li>
    <li class="list-group-item">
        <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
  <label className="form-check-label" for="flexRadioDefault3">
    Card Payment
  </label>
</div>
    </li>
  </ul>
</div>


    


            
        </div>

        <div className="d-flex justify-content-center">
        <button className="btn btn-success">Submit</button>
        </div>
        </div>
    );
};

export default Payment;



