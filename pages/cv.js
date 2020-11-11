function CV() {
  return (
    <div className="flex-col flex-1 w-full items-center justify-center bg-gray-300 print:bg-transparent py-5mm print:p-0">
      <A4>
        <div className="flex h-full">
          <div className="w-2/6 bg-blue-800 print:bg-white print:border-r-2 print:my-a4 print:border-blue-800 text-center py-a4">
            <div className="w-full flex justify-center">
              <div class="rounded-full bg-gray-300 h-32 w-32 flex items-center justify-center">
                Avatar
              </div>
            </div>
          </div>
          <div class="w-4/6 bg-white py-a4">
            <div className="px-4">
              {/* Header */}
              <div className="text-4xl text-blue-900 flex">
                <p className="font-bold">Name Surname</p>
              </div>
              <div className="text-xl text-gray-400 font-bold">
                Progressional Title
              </div>
              <div className="pt-4" />
              <div className="">
                I’m a software engineer with diverse experience in devloping
                software applications on various programming languages. Have
                strong knowledge in Android development tech stack, especially
                in functional reactive programming. Experience in all common
                architectures in mobile technology. Have good knowledge to
                automate CI/CD via Fastlane, Travis, Gitlab.
              </div>
              <div className="pt-12" />
              {/* Work Experimence */}
              <div className="w-full">
                <div className="text-xl font-bold text-blue-900">
                  WORK EXPERIENCE
                </div>
                <hr className="border border-solid border-blue-900" />

                <div className="flex">
                  <TimelineLineStart />
                  <TimelineContent>
                    <div className="flex flex-no-wrap">
                      <p>
                        <strong> AB Development </strong> / Your Job Position
                      </p>
                    </div>
                  </TimelineContent>
                </div>
                {/* At */}
                <div className="flex">
                  <TimelineLine />
                  <TimelineContent>
                    <div className="flex flex-no-wrap text-xs text-gray-600">
                      <p>From 2019 up to now</p>
                    </div>
                  </TimelineContent>
                </div>
                {/* Description */}
                <div className="flex">
                  <TimelineLine />
                  <TimelineContent>
                    <div className="flex flex-no-wrap ">
                      <p>
                        Working as the devX team member at Gojek for developing
                        and maintaining some core libraries and framework. At
                        the same time research on how to improve developer
                        experience in current code base.
                      </p>
                    </div>
                    <ul class="pl-4 list-disc">
                      <li>
                        Takeover for planning, maintaining, and add more
                        functionality to Config Provider module, the module for
                        APIs unification of remote configurations sources.
                      </li>
                      <li>
                        Maintain and develop CI script for automating task such
                        as reporting the new release from Gitlab to slack,
                        consume internal API for updating existing code base.
                      </li>
                      <li>
                        Take part in refactoring launching module, the module
                        that responsible for launching all product in Gojek.
                      </li>
                      <li>
                        Depend on the requirement, may have opportunity to do on
                        both Android and iOS to ensure feature parity between
                        two platform (Android & iOS).
                      </li>
                    </ul>
                  </TimelineContent>
                </div>
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
    <div className="bg-white w-a4-w h-a4-h text-sm shadow mt-0 mb-5mm mx-auto print:p-0 print:m-0 print:mb-5mm print:shadow-none">
      {props.children}
    </div>
  );
};

const Circle = () => (
  <div
    className="bg-blue-800 border-black"
    style={{
      height: "16px",
      borderRadius: "50%",
      "-moz-border-radius": "50%",
      "-webkit-border-radius": "50%",
      width: "16px",
    }}
  />
);

const TimelineLineStart = () => (
  <div className="w-4 flex flex-col items-center">
    <div className="mt-1 rounded-full w-1 h-1 p-1 border-2 border-blue-800 bg-gray-300 " />
    <div className="h-full border border-blue-800" />
  </div>
);

const TimelineLine = () => (
  <div className="w-4 flex justify-center">
    <div className="border border-blue-800" />
  </div>
);

const TimelineContent = (props) => (
  <div className="pl-4 w-full">{props.children}</div>
);

export default CV;
