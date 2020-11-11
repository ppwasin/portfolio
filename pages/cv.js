const A4Style = {
  background: "white",
  width: "21cm",
  height: "29.65cm",
  // width: "49.606rem",
  // height: "70.039rem",
  display: "block",
  // margin: "7.1rem 10.63rem 7.1rem 10.63rem",
  // padding: "80px 80px 60px",
  // margin: "0 auto",
  // boxShadow: "0 0 0.5cm rgba(0,0,0,0.5)",
  marginBottom: "5mm",
};

function CV() {
  return (
    <div className="flex-col flex-1 w-full items-center justify-center bg-gray-300 print:bg-transparent py-5mm print:p-0">
      <A4>
        <div className="flex h-full">
          <div className="w-2/5 border-r-2 border-blue-800 text-center">
            <div className="w-full flex justify-center">
              <div class="rounded-full bg-gray-300 h-32 w-32 flex items-center justify-center">
                Avatar
              </div>
            </div>
          </div>
          <div class="w-3/5 bg-white ">
            <div className="px-4">
              {/* Header */}
              <div className="text-4xl text-blue-900 flex">
                <p className="font-bold">Name Surname</p>
              </div>
              <div className="text-xl text-gray-400 font-bold">Role</div>
              <div className="pt-4" />
              <div className="">
                I’m a software engineer with diverse experience in devloping
                software applications on various programming languages. Have
                strong knowledge in Android development tech stack, especially
                in functional reactive programming. Experience in all common
                architectures in mobile tech-nology. Have good knowledge to
                automate CI/CD via Fastlane, Travis, Gitlab.
              </div>
              <div className="pt-12" />
              {/* Work Experimence */}
              <div className="w-full">
                <div className="text-xl font-bold text-blue-900">
                  WORK EXPERIENCE
                </div>
                <hr className="border-2 border-solid border-blue-900" />
              </div>
            </div>
          </div>
        </div>
      </A4>
      {/* <div className="text-4xl text-center text-blue-700">Name Surname</div>
        <div className="text-4xl text-center text-gray-400">Role</div>
        <div className="text-center">
          I’m a software engineer with diverse experience in designing,
          implementing and deploying software applications on various
          programming languages. Have strong knowledge in Android development
          tech stack, especially in functional reactive programming. Experience
          in all common architectures in mobile tech-nology. Have good knowledge
          to automate CI/CD via Fastlane, Travis, Gitlab.
        </div>
        <div></div>
        <div className="flex items-center justify-center my-4">
          <a href="#" className="no-underline text-blue-500">
            email@gmail.com
          </a>
          <p className="mx-1">/</p>
          <a href="#" className="no-underline text-blue-500">
            (+66) xx xx xxxx
          </a>
          <p className="mx-1">/</p>
          <a href="#" className="no-underline text-blue-500">
            website
          </a>
        </div> */}
      {/* </div> */}
      <A4>
        <p>Inside</p>
      </A4>
    </div>
  );
}

const A4 = (props) => {
  return (
    <div
      style={A4Style}
      className="text-sm shadow-md my-0 mx-auto p-25mm print:p-0 print:m-0 print:shadow-none"
    >
      {props.children}
    </div>
  );
};

export default CV;
