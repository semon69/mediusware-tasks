import React, { useEffect, useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");

  const handleClick = (val) => {
    setShow(val);
  };

  const [tasks, setTasks] = useState([]);
  //   let tasks = [];

  const handleTask = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const status = form.status.value;
    const newData = { name, status };

    // Update tasks using the functional form of setTasks
    setTasks(prevTasks => {
        const updatedTasks = [...prevTasks, newData];
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        return updatedTasks;
      });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    form.reset()
  };

  // retrieve data when component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  
  const filteredTasks = tasks.filter((item) => {
    if (show === "all") {
      return true;
    } else {
      return item.status === show;
    }
  });

  filteredTasks.sort((a, b) => {
    const order = { active: 1, completed: 2 };
    return (order[a.status] || 3) - (order[b.status] || 3);
  });

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleTask}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                name="status"
                type="text"
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((item, index) => (
                <tr key={index}>
                  <td scope="col">{item?.name}</td>
                  <td scope="col">{item?.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
