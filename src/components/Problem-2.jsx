import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const Problem2 = () => {
  const [allContacts, setAllContacts] = useState(null);
  const [usContacts, setUsContacts] = useState(null);
  const [error, setError] = useState(null);
  const [modalOpenA, setModalOpenA] = useState(false);
  const [modalOpenB, setModalOpenB] = useState(false);

  const openModalA = () => {
    setModalOpenA(true);
  };

  const closeModalA = () => {
    setModalOpenA(false);
  };
  const openModalB = () => {
    setModalOpenB(true);
  };

  const closeModalB = () => {
    setModalOpenB(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://contact.mediusware.com/api/contacts/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setAllContacts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://contact.mediusware.com/api/country-contacts/United%20States/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUsContacts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);
  //   console.log(allContacts);
  console.log(usContacts);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={openModalA}
            className="btn btn-lg btn-outline-primary"
            type="button"
          >
            All Contacts
          </button>
          {modalOpenA && <Modal closeModal={closeModalA} data={allContacts} contactsName='All Contacts' />}
          <button
            onClick={openModalB}
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
          {modalOpenB && <Modal closeModal={closeModalB} data={usContacts} contactsName='US Contacts' />}
        </div>
      </div>
    </div>
  );
};

export default Problem2;
