import React from "react";



function AllReq() {
  retrun(
    <div>
      <div class="container my-5">
        <div class="text-center">
          <h1 class="display-4 text-center mb-3">Axios Crash Course</h1>
          <button class="btn btn-primary my-3" id="get">
            GET
          </button>
          <button class="btn btn-info" id="post">
            POST
          </button>
          <button class="btn btn-warning" id="update">
            PUT/PATCH
          </button>
          <button class="btn btn-danger" id="delete">
            DELETE
          </button>
        </div>
        <hr />
        <div id="res"></div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js"></script>
      <script src="main.js"></script>
    </div>
  );
}

export default AllReq;
