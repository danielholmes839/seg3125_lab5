import React, { useEffect, useRef, useState } from "react";
import Tippy from "@tippyjs/react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

import logo from "./img/company_logo.png";

import oz_img from "./img/doctor_oz.jpg";
import phil_img from "./img/doctor_phil.jpg";
import stock_img from "./img/doctor.jpg";

enum Section {
  SERVICES,
  REGISTER,
  DOCTORS,
}

type Doctor = {
  name: string;
  img: string;
};

type Service = {
  name: string;
  criteria: string;
  price: number;
};

const services: Service[] = [
  { name: "COVID 19 Dose #1", criteria: "18+", price: 0 },
  { name: "COVID 19 Dose #2", criteria: "60+", price: 0 },
  { name: "Physiotherapy/Massage", criteria: "Anyone", price: 100 },
  { name: "Ultrasound Treatment", criteria: "Anyone", price: 125 },
  { name: "Cupping Therapy", criteria: "Anyone", price: 75 },
];

const doctors: Doctor[] = [
  { name: "Dr. Something", img: stock_img },
  { name: "Dr. Oz", img: oz_img },
  { name: "Dr. Phil", img: phil_img },
];

const Tooltip: React.FC = ({ children }) => {
  return (
    <div className="rounded p-2 bg-dark">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="me-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        height={20}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className=" text-white">{children}</span>;
    </div>
  );
};

const Header: React.FC<{ refs: any }> = ({ refs }) => {
  const [active, setActive] = useState(Section.SERVICES);

  const registerOnClick = () => {
    refs.formRef.current.scrollIntoView();
    setActive(Section.REGISTER);
  };

  const servicesOnClick = () => {
    refs.formRef.current.scrollIntoView();
    setActive(Section.SERVICES);
  };

  const doctorsOnClick = () => {
    refs.doctorsRef.current.scrollIntoView();
    setActive(Section.DOCTORS);
  };

  return (
    <nav className="navbar bg-dark text-white py-1 mb-3">
      <div className="container-lg">
        <img src={logo} style={{ width: "20%" }} alt="clinic logo" />
        <div className="d-inline" style={{ width: "80%" }}>
          <h1 className="ms-3">Welcome to the Ottawa Physiotherapy Clinic</h1>
          <p className="ms-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              height={20}
              className="me-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            5-2 Lorry Greenberg Dr, Ottawa, ON K1G 5H6
          </p>
          <div className="navbar-collapse">
            <ul className="list-group list-group-horizontal">
              <li className="d-inline-block">
                <a
                  className={
                    active === Section.SERVICES
                      ? "nav-link text-decoration-underline"
                      : "nav-link"
                  }
                  onClick={servicesOnClick}
                >
                  Services
                </a>
              </li>
              <li className="d-inline-block">
                <a
                  className={
                    active === Section.REGISTER
                      ? "nav-link text-decoration-underline"
                      : "nav-link"
                  }
                  onClick={registerOnClick}
                >
                  Register
                </a>
              </li>
              <li className="d-inline-block">
                <a
                  className={
                    active === Section.DOCTORS
                      ? "nav-link text-decoration-underline"
                      : "nav-link"
                  }
                  onClick={doctorsOnClick}
                >
                  Team
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Services: React.FC = () => {
  return (
    <>
      <div className="mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="d-inline align-middle me-2"
          height={45}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
        <h1 className="d-inline align-middle">Services</h1>
      </div>
      <div className="mb-4">
        <table className="table table-info bg-info table-bordered ">
          <thead>
            <tr>
              <td className="fs-5">Service</td>
              <td className="fs-5">Criteria</td>
              <td className="fs-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  height={30}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>{" "}
                Price
              </td>
            </tr>
          </thead>
          <tbody>
            {services.map(({ name, price, criteria }, i) => (
              <tr>
                <td className="fs-6">{name}</td>
                <td className="fs-6">{criteria}</td>
                <td className="fs-6">${price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

function isCreditCard(text: string) {
  let regexp = new RegExp("(?:[0-9]{4}-){3}[0-9]{4}|[0-9]{16}");
  return regexp.test(text) && text.length === 19;
}

function isPhoneNumber(text: string) {
  let regexp = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
  return regexp.test(text) && text.length === 12;
}

const Form: React.FC = () => {
  const schedules = [
    [0, 1],
    [2, 3],
    [4, 5, 7],
  ];

  const [creditCard, setCreditCard] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [doctorIndex, setDoctorIndex] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const submit = (e: any) => {
    e.preventDefault();
    if (!isCreditCard(creditCard)) {
      alert("Please enter a valid credit card");
    } else if (!isPhoneNumber(phoneNumber)) {
      alert("Please enter a valid phone number");
    } else if (!date) {
      alert("Please choose a date");
    } else {
      alert(
        `Successfully booked an appointment for ${services[serviceIndex].name} with ${doctors[doctorIndex].name} on ${date}`
      );
    }
  };

  return (
    <div className="mb-5">
      <div className="mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="d-inline align-middle me-2"
          height={45}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
        <h1 className="d-inline align-middle">Register</h1>
      </div>
      <form>
        <div className="row">
          <div className="mb-2 col-6">
            <label className="form-label mb-0">Email address</label>
            <input type="email" className="form-control" />
          </div>

          <div className="mb-2 col-6">
            <Tippy
              content={
                <Tooltip>
                  We need your phone number. I'm not sure why but it's
                  absolutely necessary
                </Tooltip>
              }
            >
              <label className="form-label mb-0">Phone Number</label>
            </Tippy>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Format: xxx-xxxx-xxxx"
            />
            {phoneNumber !== "" && !isPhoneNumber(phoneNumber) && (
              <p className="text-danger">
                Please use the following format xxx-xxxx-xxxx
              </p>
            )}
          </div>

          <div className="mb-2 col-6">
            <label className="form-label mb-0">Service</label>
            <select
              className="form-select"
              onChange={(e) => setServiceIndex(parseInt(e.target.value))}
            >
              {services.map(({ name }, i) => (
                <option key={i} value={i}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-2 col-6">
            <Tippy
              content={
                <Tooltip>
                  You can choose a doctor. However, not all doctors are
                  available on the same days
                </Tooltip>
              }
            >
              <label className="form-label mb-0">Doctor</label>
            </Tippy>
            <select
              className="form-select"
              onChange={(e) => setDoctorIndex(parseInt(e.target.value))}
            >
              {doctors.map(({ name }, i) => (
                <option key={i} value={i}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-2 col-6">
            <label className="form-label mb-0">Date</label>
            <div>
              <DayPickerInput
                component={(props: any) => (
                  <input {...props} className="form-control" />
                )}
                onDayChange={(day) => setDate(day)}
                classNames={{
                  container: "w-full",
                  overlay: "DayPickerInput-Overlay",
                  overlayWrapper: "DayPickerInput-OverlayWrapper",
                }}
                dayPickerProps={{
                  disabledDays: { daysOfWeek: schedules[doctorIndex] },
                }}
              />
            </div>
          </div>

          <div className="mb-2 col-6">
            <label className="form-label mb-0">Time</label>
            <input type="time" className="form-control" />
          </div>
        </div>
      </form>

      <div className="my-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="d-inline align-middle me-2"
          fill="none"
          viewBox="0 0 24 24"
          height={20}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
        <Tippy
          content={
            <Tooltip>
              Payment information is required in case of a last minute
              cancellation.
            </Tooltip>
          }
        >
          <h5 className="d-inline align-middle">Payment Information</h5>
        </Tippy>
      </div>
      <form>
        <div className="row">
          <div className="mb-2 col-6">
            <label className="form-label mb-0">Credit Card Number</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setCreditCard(e.target.value)}
              placeholder="Format: xxxx-xxxx-xxxx-xxxx"
            />
            {creditCard !== "" && !isCreditCard(creditCard) && (
              <p className="text-danger">
                Please use the following format xxxx-xxxx-xxxx-xxxx
              </p>
            )}
          </div>
          <div className="mb-2 col-3">
            <label className="form-label mb-0">CVV</label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-2 col-3">
            <label className="form-label mb-0">Expiration Date (mm/yy)</label>
            <input type="email" className="form-control" />
          </div>
          <div className="col-12">
            <button
              className="btn btn-primary w-100 mt-3"
              onClick={(e) => submit(e)}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="col-lg-3 col-sm-12">
      <div className="card">
        <img
          src={doctor.img}
          className="card-img-top img-fluid"
          style={{ height: 200 }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{doctor.name}</h5>
          <p className="card-text fs-6">
            One of the best doctors to ever do it.
          </p>
        </div>
      </div>
    </div>
  );
};

const Doctors: React.FC = () => {
  return (
    <>
      <div className="mb-2">
        <svg
          className="d-inline align-middle me-2"
          height={45}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
        <h1 className="d-inline align-middle">Meet Our Team</h1>
      </div>
      <div className="row mb-3">
        {doctors.map((doctor, i) => (
          <DoctorCard key={i} doctor={doctor} />
        ))}
      </div>
    </>
  );
};

const App: React.FC = () => {
  const servicesRef = useRef(null);
  const formRef = useRef(null);
  const doctorsRef = useRef(null);

  return (
    <>
      <Header refs={{ servicesRef, formRef, doctorsRef }} />
      <div className="container mx-auto">
        <div ref={servicesRef}>
          <Services />
        </div>
        <div ref={formRef}>
          <Form />
        </div>
        <div ref={doctorsRef}>
          <Doctors />
        </div>
      </div>
    </>
  );
};

export default App;
