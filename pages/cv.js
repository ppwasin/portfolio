import * as R from "ramda";
import * as RExt from "utils/RamdaExt";
import experiences from "data/experiences";
import contacts from "data/contacts";
import skill from "data/skill";

function CV() {
  return (
    <div className="flex-col flex-1 w-full items-center justify-center bg-secondaryLight print:bg-transparent py-5mm print:p-0">
      <A4>
        <div className="flex h-full">
          <div className="text-secondaryLight w-2/6 bg-primary print:bg-white print:border-r-2 print:my-a4 print:border-primary py-a4">
            <div className="flex flex-col ">
              <div className="flex items-center justify-center">
                <div className="rounded-full bg-gray-300 h-32 w-32 flex items-center justify-center">
                  Avatar
                </div>
              </div>
              {/* Contacts */}
              <div className="mx-3 my-2">
                <p className="">Email: {contacts.email}</p>
                <p className="">Tel: {contacts.tel}</p>
                <p className="">
                  <a href={contacts.linkedin}>Linkedin: @Wasin</a>
                </p>
                <p className="">
                  <a className="" href={contacts.twitter}>
                    Twitter: @Mheevun
                  </a>
                </p>
              </div>
              {/* Skill */}

              {skill.map((value, index) => {
                return (
                  <div key={index}>
                    <div>{value.name}</div>
                    <div className="ml-4">
                      {R.compose(
                        RExt.mapIndex((value, index) => {
                          return <div key={index}>{value}</div>;
                        }),
                        R.defaultTo([]),
                        R.prop("list")
                      )(value)}
                    </div>
                    
                    <div className="ml-4">
                      {R.compose(
                        RExt.mapIndex((value, index) => {
                          return <div key={index}>{value.name}</div>;
                        }),
                        R.defaultTo([]),
                        R.prop("sub")
                      )(value)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-4/6 bg-white py-a4">
            <div className="px-4">
              {/* Header */}
              <div className="text-2xl text-primaryDark flex">
                <p className="font-bold">Wasin Passornpakorn</p>
              </div>
              <div className="text-xm text-secondary font-bold">
                Android Developer
              </div>
              I’m a software engineer with diverse experience in devloping
              software applications on various programming languages. Have
              strong knowledge in Android development tech stack, especially in
              functional reactive programming. Experience in all common
              architectures in mobile technology. Have good knowledge to
              automate CI/CD via Fastlane, Travis, Gitlab.
              <div className="pt-8" />
              {/* Experimence */}
              <div className="w-full">
                <div className="text-2xl font-bold text-primaryDark">
                  Experience
                </div>
                <hr className="mb-2 border border-solid border-primaryLight" />
                {experiences.map((value, index) => {
                  return (
                    <Experience
                      key={index}
                      exp={value}
                      isInit={R.equals(0, index)}
                      isLast={R.equals(R.length(experiences) - 1, index)}
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
          <div className="flex flex-no-wrap text-primaryDark">
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
          <div className="flex flex-no-wrap text-xs text-secondary">
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
          <ul className="pl-4 list-disc">
            {exp.roleBullets.map((value, index) => {
              return <li key={index}> {value}</li>;
            })}
          </ul>
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
      R.always(<div className="h-full border border-primaryLight" />)
    )(isInit)}
    <div className="rounded-full w-1 h-1 p-1 border-2 border-white bg-primaryLight" />

    {R.ifElse(
      R.equals(true),
      R.always(<div className="mt-1" />),
      R.always(<div className="h-full border border-primaryLight" />)
    )(isLast)}
  </div>
);

const TimelineLine = ({ isLast }) => (
  <div className="w-4 flex justify-center">
    {R.ifElse(
      R.equals(true),
      R.always(),
      R.always(<div className="border border-primaryLight" />)
    )(isLast)}
  </div>
);

const TimelineContent = (props) => (
  <div className="pl-4 w-full">{props.children}</div>
);

export default CV;
