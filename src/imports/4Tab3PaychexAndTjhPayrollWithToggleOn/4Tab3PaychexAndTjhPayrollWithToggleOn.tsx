import svgPaths from "./svg-yzpi1sgree";

function Switch() {
  return (
    <div className="col-1 ml-[7px] mt-[6px] relative row-1 size-[12px]" data-name="Switch">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Switch">
          <circle cx="6" cy="6" fill="var(--fill-0, #828282)" id="Ellipse 1" r="5.5" stroke="var(--stroke-0, #828282)" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <button className="cursor-pointer grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#e6e6e6] border border-[#d3d3d3] border-solid col-1 h-[24px] ml-0 mt-0 relative rounded-[24px] row-1 w-[44px]" data-name="Background" />
      <Switch />
    </button>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative flex-1 min-w-0">
      <p className="font-['Poppins',sans-serif] italic leading-[24px] relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full min-w-0 break-words">Need a more detailed walk-through?</p>
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="QuickViewToggle">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Toggle Switch">
          <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-right tracking-[1px] min-w-0 break-words">Toggle Detailed Instructions</p>
          <Group4 />
        </div>
      </div>
    </div>
  );
}

function StepText() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[8px] items-start relative shrink-0 w-full z-[3]" data-name="StepText">
      <p className="flex-1 font-['Poppins',sans-serif] font-medium leading-[32px] not-italic relative text-[20px] text-black tracking-[1px] min-w-0 break-words">Setup guide to integrate Paychex or TJH</p>
      <Frame5 />
    </div>
  );
}

function NumberContainer() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">2</p>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] tracking-[1px] w-full" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold relative shrink-0 text-black w-full">Go to "Payroll Provider" to begin the integration process</p>
      <p className="font-['Poppins',sans-serif] relative shrink-0 text-[#6b6b6b] w-full whitespace-pre-wrap">{`Select "Add New" and select Paychex or TJH to start the integration.`}</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Container">
      <TextContainer />
    </div>
  );
}

function Step() {
  return (
    <div className="bg-white w-full min-w-px relative rounded-[8px]" data-name="Step 1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-start p-[24px] relative size-full">
          <NumberContainer />
          <Container4 />
        </div>
      </div>
      <div aria-hidden="true" className="hidden" />
    </div>
  );
}

function NumberContainer1() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">3</p>
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[24px] min-w-px not-italic relative text-[16px] tracking-[1px]" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold relative shrink-0 text-black w-full">Complete setup and verify connection</p>
      <p className="font-['Poppins',sans-serif] relative shrink-0 text-[#6b6b6b] w-full whitespace-pre-wrap">{"Then you can select Paychex or TJH Payroll from the screen to link up the integration.\n\nOnce setup is complete, you will be re-routed to your CalSavers dashboard. You should see a \"Connected\" badge."}</p>
    </div>
  );
}

function Step1() {
  return (
    <div className="bg-white w-full min-w-px relative rounded-[8px]" data-name="Step 2">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-start p-[24px] relative size-full">
          <NumberContainer1 />
          <TextContainer1 />
        </div>
      </div>
      <div aria-hidden="true" className="hidden" />
    </div>
  );
}

function NumberContainer2() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">1</p>
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[24px] min-w-px not-italic relative text-[16px] tracking-[1px]" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold relative shrink-0 text-black w-full">Log in and add a bank or select a previously added account</p>
      <p className="font-['Poppins',sans-serif] relative shrink-0 text-[#6b6b6b] w-full">Once logged in, go to "Banking Information" and add a bank account that your company will use to send employee contributions.</p>
    </div>
  );
}

function Step2() {
  return (
    <div className="bg-white w-full min-w-px relative rounded-[8px]" data-name="Step 3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-start p-[24px] relative size-full">
          <NumberContainer2 />
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Container">
      <TextContainer2 />
      <a className="bg-[#00594f] content-stretch cursor-pointer flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" href="https://employer.calsavers.com/californiaertpl/enroll/createEmp/viewCollectEmpPreRegDetails.cs?request_locale=en_US" target="_blank" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#00473f] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
        <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[1px] whitespace-nowrap">
          <p className="leading-[24px]">Account Login</p>
        </div>
      </a>
    </div>
        </div>
      </div>
      <div aria-hidden="true" className="hidden" />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <Step2 />
      <Step />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <Step1 />
    </div>
  );
}

function StepsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="StepsContainer">
      <Row />
      <Row1 />
    </div>
  );
}

function RegisterExerienced() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[1]" data-name="Register/Exerienced">
      <StepsContainer />
    </div>
  );
}

function Group1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] isolate items-start relative shrink-0 w-full z-[1]" data-name="Group">
      <StepText />
      <RegisterExerienced />
    </div>
  );
}

// Export the tab body content for use in the unified layout
export { Group1 as Tab3ToggleOnBodyContent };
