import React from "react"

import { useState } from "react";

const ShippingFee = () => {
  const [shippingFee, setShippingFee] = useState();
  const [weight, setWeight] = useState();
  const [totalCost, setTotalCost] = useState();

  const handleCountryChange = (event) => {
    setShippingFee(event.target.value);
  };

  const handlePackageChange = (event) => {
    setWeight(event.target.value);
  };

  function calculate() {
    let cost = 200 + shippingFee * weight;
    setTotalCost(cost);
  }

  return (
    <div id="shippingCal">
      <h2>
        <strong>Handling Fee:</strong> 200
      </h2>
      <h2>
        <strong>Shipping Fee: </strong>
        {shippingFee}{" "}
      </h2>
      <h2>
        <strong>Weight:</strong> {weight}
      </h2>
      <br />

      <div>
        <h1>Packages</h1>
        <input
          onChange={handlePackageChange}
          name="packages"
          type="radio"
          id="Basic"
          value="1"
        />
        <label for="Basic"> Basic </label>
        <br />
        <input
          onChange={handlePackageChange}
          name="packages"
          type="radio"
          id="Humble"
          value="2"
        />
        <label for="Humble"> Humble</label>
        <br />
        <input
          onChange={handlePackageChange}
          name="packages"
          type="radio"
          id="Delux"
          value="5"
        />
        <label for="Delux"> Delux</label>
        <br />
        <input
          onChange={handlePackageChange}
          name="packages"
          type="radio"
          id="Premium"
          value="8"
        />
        <label for="Premium"> Premium</label>
        <br />
        <br />
      </div>
      <select
        id="country"
        name="country"
        className="form-control"
        onChange={handleCountryChange}
      >
        <option value="15">Afghanistan</option>
        <option value="15">Åland Islands</option>
        <option value="15">Albania</option>
        <option value="15">Algeria</option>
        <option value="15">American Samoa</option>
        <option value="15">Andorra</option>
        <option value="15">Angola</option>
        <option value="15">Anguilla</option>
        <option value="15">Antarctica</option>
        <option value="15">Antigua and Barbuda</option>
        <option value="15">Argentina</option>
        <option value="15">Armenia</option>
        <option value="15">Aruba</option>
        <option value="15">Australia</option>
        <option value="5">Austria</option>
        <option value="15">Azerbaijan</option>
        <option value="15">Bahamas</option>
        <option value="15">Bahrain</option>
        <option value="15">Bangladesh</option>
        <option value="15">Barbados</option>
        <option value="5">Belarus</option>
        <option value="5">Belgium</option>
        <option value="5">Belize</option>
        <option value="15">Benin</option>
        <option value="15">Bermuda</option>
        <option value="15">Bhutan</option>
        <option value="15">Bolivia</option>
        <option value="5">Bosnia and Herzegovina</option>
        <option value="15">Botswana</option>
        <option value="15">Bouvet Island</option>
        <option value="15">Brazil</option>
        <option value="15">British Indian Ocean Territory</option>
        <option value="15">Brunei Darussalam</option>
        <option value="5">Bulgaria</option>
        <option value="15">Burkina Faso</option>
        <option value="15">Burundi</option>
        <option value="15">Cambodia</option>
        <option value="15">Cameroon</option>
        <option value="15">Canada</option>
        <option value="15">Cape Verde</option>
        <option value="15">Cayman Islands</option>
        <option value="15">Central African Republic</option>
        <option value="15">Chad</option>
        <option value="15">Chile</option>
        <option value="15">China</option>
        <option value="15">Christmas Island</option>
        <option value="15s">Cocos (Keeling) Islands</option>
        <option value="15">Colombia</option>
        <option value="15">Comoros</option>
        <option value="15">Congo</option>
        <option value="15">Congo, The Democratic Republic of The</option>
        <option value="15">Cook Islands</option>
        <option value="15">Costa Rica</option>
        <option value="15">Cote D'ivoire</option>
        <option value="5">Croatia</option>
        <option value="15">Cuba</option>
        <option value="5">Cyprus</option>
        <option value="5">Czech Republic</option>
        <option value="0">Denmark</option>
        <option value="15">Djibouti</option>
        <option value="15">Dominica</option>
        <option value="15">Dominican Republic</option>
        <option value="15">Ecuador</option>
        <option value="15">Egypt</option>
        <option value="15">El Salvador</option>
        <option value="15">Equatorial Guinea</option>
        <option value="15">Eritrea</option>
        <option value="5">Estonia</option>
        <option value="15">Ethiopia</option>
        <option value="15)">Falkland Islands (Malvinas)</option>
        <option value="5">Faroe Islands</option>
        <option value="15">Fiji</option>
        <option value="5">Finland</option>
        <option value="5">France</option>
        <option value="15">French Guiana</option>
        <option value="15">French Polynesia</option>
        <option value="15">French Southern Territories</option>
        <option value="15">Gabon</option>
        <option value="15">Gambia</option>
        <option value="5">Georgia</option>
        <option value="5">Germany</option>
        <option value="15">Ghana</option>
        <option value="15">Gibraltar</option>
        <option value="5">Greece</option>
        <option value="5">Greenland</option>
        <option value="15">Grenada</option>
        <option value="15">Guadeloupe</option>
        <option value="15">Guam</option>
        <option value="15">Guatemala</option>
        <option value="15">Guernsey</option>
        <option value="15">Guinea</option>
        <option value="15">Guinea-bissau</option>
        <option value="15">Guyana</option>
        <option value="15">Haiti</option>
        <option value="15">Heard Island and Mcdonald Islands</option>
        <option value="Holy See (Vatican City State)">
          Holy See (Vatican City State)
        </option>
        <option value="15">Honduras</option>
        <option value="15">Hong Kong</option>
        <option value="5">Hungary</option>
        <option value="5">Iceland</option>
        <option value="15">India</option>
        <option value="15">Indonesia</option>
        <option value="15">Iran, Islamic Republic of</option>
        <option value="15">Iraq</option>
        <option value="5">Ireland</option>
        <option value="5">Isle of Man</option>
        <option value="15">Israel</option>
        <option value="5">Italy</option>
        <option value="15">Jamaica</option>
        <option value="15">Japan</option>
        <option value="15">Jersey</option>
        <option value="15">Jordan</option>
        <option value="15">Kazakhstan</option>
        <option value="15">Kenya</option>
        <option value="15">Kiribati</option>
        <option value="15">Korea, Democratic People's Republic of</option>
        <option value="15">Korea, Republic of</option>
        <option value="5">Kuwait</option>
        <option value="15">Kyrgyzstan</option>
        <option value="15">Lao People's Democratic Republic</option>
        <option value="5">Latvia</option>
        <option value="15">Lebanon</option>
        <option value="15">Lesotho</option>
        <option value="15">Liberia</option>
        <option value="15">Libyan Arab Jamahiriya</option>
        <option value="5">Liechtenstein</option>
        <option value="5">Lithuania</option>
        <option value="5">Luxembourg</option>
        <option value="15">Macao</option>
        <option value="15">Macedonia, The Former Yugoslav Republic of</option>
        <option value="15">Madagascar</option>
        <option value="15">Malawi</option>
        <option value="15">Malaysia</option>
        <option value="15">Maldives</option>
        <option value="15">Mali</option>
        <option value="5">Malta</option>
        <option value="15">Marshall Islands</option>
        <option value="15">Martinique</option>
        <option value="15">Mauritania</option>
        <option value="15">Mauritius</option>
        <option value="15">Mayotte</option>
        <option value="15">Mexico</option>
        <option value="15">Micronesia, Federated States of</option>
        <option value="5">Moldova, Republic of</option>
        <option value="5">Monaco</option>
        <option value="15">Mongolia</option>
        <option value="5">Montenegro</option>
        <option value="15">Montserrat</option>
        <option value="15">Morocco</option>
        <option value="15">Mozambique</option>
        <option value="15">Myanmar</option>
        <option value="15">Namibia</option>
        <option value="15">Nauru</option>
        <option value="15">Nepal</option>
        <option value="5">Netherlands</option>
        <option value="15">Netherlands Antilles</option>
        <option value="15">New Caledonia</option>
        <option value="15">New Zealand</option>
        <option value="15">Nicaragua</option>
        <option value="15">Niger</option>
        <option value="15">Nigeria</option>
        <option value="15">Niue</option>
        <option value="15">Norfolk Island</option>
        <option value="15">Northern Mariana Islands</option>
        <option value="0">Norway</option>
        <option value="15">Oman</option>
        <option value="15">Pakistan</option>
        <option value="15">Palau</option>
        <option value="15">Palestinian Territory, Occupied</option>
        <option value="15">Panama</option>
        <option value="15">Papua New Guinea</option>
        <option value="15">Paraguay</option>
        <option value="15">Peru</option>
        <option value="15">Philippines</option>
        <option value="15">Pitcairn</option>
        <option value="5">Poland</option>
        <option value="5">Portugal</option>
        <option value="15">Puerto Rico</option>
        <option value="15">Qatar</option>
        <option value="15">Reunion</option>
        <option value="5">Romania</option>
        <option value="15">Russian Federation</option>
        <option value="15">Rwanda</option>
        <option value="15">Saint Helena</option>
        <option value="15">Saint Kitts and Nevis</option>
        <option value="15">Saint Lucia</option>
        <option value="15">Saint Pierre and Miquelon</option>
        <option value="15">Saint Vincent and The Grenadines</option>
        <option value="15">Samoa</option>
        <option value="15">San Marino</option>
        <option value="15">Sao Tome and Principe</option>
        <option value="15">Saudi Arabia</option>
        <option value="15">Senegal</option>
        <option value="5">Serbia</option>
        <option value="15">Seychelles</option>
        <option value="15">Sierra Leone</option>
        <option value="15">Singapore</option>
        <option value="5">Slovakia</option>
        <option value="5">Slovenia</option>
        <option value="15">Solomon Islands</option>
        <option value="15">Somalia</option>
        <option value="15">South Africa</option>
        <option value="15">South Georgia and The South Sandwich Islands</option>
        <option value="5">Spain</option>
        <option value="15">Sri Lanka</option>
        <option value="15">Sudan</option>
        <option value="15">Suriname</option>
        <option value="15">Svalbard and Jan Mayen</option>
        <option value="15">Swaziland</option>
        <option value="0">Sweden</option>
        <option value="5">Switzerland</option>
        <option value="15">Syrian Arab Republic</option>
        <option value="15">Taiwan</option>
        <option value="15">Tajikistan</option>
        <option value="15">Tanzania, United Republic of</option>
        <option value="15">Thailand</option>
        <option value="15">Timor-leste</option>
        <option value="15">Togo</option>
        <option value="15">Tokelau</option>
        <option value="15">Tonga</option>
        <option value="15">Trinidad and Tobago</option>
        <option value="15">Tunisia</option>
        <option value="15">Turkey</option>
        <option value="15">Turkmenistan</option>
        <option value="15">Turks and Caicos Islands</option>
        <option value="15">Tuvalu</option>
        <option value="15">Uganda</option>
        <option value="5">Ukraine</option>
        <option value="15">United Arab Emirates</option>
        <option value="5">United Kingdom</option>
        <option value="15">United States</option>
        <option value="U15">United States Minor Outlying Islands</option>
        <option value="15">Uruguay</option>
        <option value="15">Uzbekistan</option>
        <option value="15">Vanuatu</option>
        <option value="15">Venezuela</option>
        <option value="15">Viet Nam</option>
        <option value="15">Virgin Islands, British</option>
        <option value="15">Virgin Islands, U.S.</option>
        <option value="15">Wallis and Futuna</option>
        <option value="15">Western Sahara</option>
        <option value="15">Yemen</option>
        <option value="15">Zambia</option>
        <option value="15">Zimbabwe</option>
      </select>
      <br />
      <button onClick={calculate}>Calculate shipping cost</button>
      <h2>
        <strong>Total cost: </strong>
        {totalCost}
      </h2>
    </div>
  );
};

export default ShippingFee;