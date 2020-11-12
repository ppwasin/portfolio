import * as R from "rambda";
import * as RExt from "utils/RamdaExt";
import experiences from "data/experiences";

function CV() {
  return (
    <div className="flex-col flex-1 w-full items-center justify-center bg-gray-300 print:bg-transparent py-5mm print:p-0">
      <A4>
        <div className="flex h-full">
          <div className="w-2/6 bg-blue-800 print:bg-white print:border-r-2 print:my-a4 print:border-blue-800 text-center py-a4">
            <div className="w-full flex justify-center">
              <div className="rounded-full bg-gray-300 h-32 w-32 flex items-center justify-center">
                Avatar
              </div>
            </div>
          </div>
          <div className="w-4/6 bg-white py-a4">
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
              {/* Experimence */}
              <div className="w-full">
                <div className="text-2xl font-bold text-blue-900">
                  Experience
                </div>
                <hr className="border border-solid border-blue-900" />
                {experiences.map((value, index) => {
                  return (
                    <Experience
                      key={index}
                      exp={value}
                      isInit={R.equals(0, index)}
                      isLast={index === 3}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </A4>
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

//Compound component
const Experience = ({ exp, isLast, isInit }) => {
  return (
    <>
      <div className="flex">
        <TimelineLineStart isInit={isInit} isLast={isLast} />
        <TimelineContent>
          <div className="flex flex-no-wrap">
            <p>
              <strong> {exp.company} </strong>
              {R.compose(RExt.rChain(R.concat("/ ")), R.prop("roleApp"))(exp)}
            </p>
          </div>
        </TimelineContent>
      </div>
      {/* At */}
      <div className="flex">
        <TimelineLine isLast={isLast} />
        <TimelineContent>
          <div className="flex flex-no-wrap text-xs text-gray-600">
            <p>{exp.roleDuration + " - " + exp.roleName} </p>
          </div>
        </TimelineContent>
      </div>
      {/* Description */}
      <div className="flex">
        <TimelineLine isLast={isLast} />
        <TimelineContent>
          <div className="flex flex-no-wrap ">
            <p>{exp.roleOverview}</p>
          </div>
          {/* Bullet */}
          {/* <ul className="pl-4 list-disc">
            {exp.roleBullets.map((value, index) => {
              return <li key={index}> {value}</li>;
            })}
          </ul> */}
        </TimelineContent>
      </div>
      <div className="flex">
        <TimelineLine isLast={isLast} />
        <TimelineContent>
          <div className="h-5" />
        </TimelineContent>
      </div>
    </>
  );
};

//View
const TimelineLineStart = ({ isInit, isLast }) => (
  <div className="w-4 flex flex-col items-center">
    {R.ifElse(
      R.equals(true),
      R.always(<div className="mt-1" />),
      R.always(<div className="h-full border border-blue-800" />)
    )(isInit)}
    <div className="rounded-full w-1 h-1 p-1 border-2 border-blue-800 bg-gray-300 " />

    {R.ifElse(
      R.equals(true),
      R.always(<div className="mt-1" />),
      R.always(<div className="h-full border border-blue-800" />)
    )(isLast)}
  </div>
);

const TimelineLine = ({ isLast }) => (
  <div className="w-4 flex justify-center">
    {R.ifElse(
      R.equals(true),
      R.always(),
      R.always(<div className="border border-blue-800" />)
    )(isLast)}
  </div>
);

const TimelineContent = (props) => (
  <div className="pl-4 w-full">{props.children}</div>
);

export default CV;
