import svgPaths from "./svg-lbezz3nxnc";

function Switch() {
  return (
    <div className="col-1 ml-[21px] mt-px relative row-1 size-[22px]" data-name="Switch">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Switch">
          <circle cx="11" cy="11" fill="var(--fill-0, white)" id="Ellipse 1" r="11" />
          <g id="Frame 1344">
            <path d="M6.99995 11.6562L9.51411 14.1704L15.171 8.51355" id="Rectangle 47" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <button className="cursor-pointer grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#00594f] col-1 h-[24px] ml-0 mt-0 relative rounded-[24px] row-1 w-[44px]" data-name="Background" />
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
          <Group5 />
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

function NumberContainer1() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">2</p>
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#00594f] text-[16px] tracking-[1px] w-[min-content]">Go to "Payroll Provider" to begin the integration process</p>
    </div>
  );
}

function AccordionExpanded1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Accordion/expanded">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[24px] relative size-full">
          <NumberContainer1 />
          <TextContainer1 />
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron-up">
            <div className="absolute inset-[28.12%_9.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5019 10.5023">
                <path clipRule="evenodd" d={svgPaths.p36fe5600} fill="var(--fill-0, #00594F)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00594f] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="font-['Poppins',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[0px] tracking-[1px] w-full whitespace-pre-wrap">
        <p className="mb-0 text-[16px]">

          <span className="leading-[24px]">{`Select "Payroll integration" on the left-hand side of the screen under Dashboard. Select "Add New" to start the payroll integration process.`}</span>
        </p>
        <p className="leading-[24px] mb-0 text-[16px]">​</p>
        <p className="leading-[24px] mb-0 text-[16px]">When prompted, choose your payroll provider by selecting either Paychex or TJH from the options, then continue.</p>
      </div>
    </div>
  );
}

function Step1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Step">
      <Text3 />
    </div>
  );
}

function Steps2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Steps">
      <Step1 />
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#00594f] text-[16px] tracking-[1px] w-[min-content]">Log in and add a bank or select a previously added account</p>
    </div>
  );
}

function AccordionExpanded2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Accordion/expanded">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[24px] relative size-full">
          <NumberContainer2 />
          <TextContainer2 />
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron-up">
            <div className="absolute inset-[28.12%_9.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5019 10.5023">
                <path clipRule="evenodd" d={svgPaths.p36fe5600} fill="var(--fill-0, #00594F)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00594f] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="font-['Poppins',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full whitespace-pre-wrap">
        <p className="leading-[24px] mb-0">Once <a href="https://employer.calsavers.com/californiaertpl/enroll/createEmp/viewCollectEmpPreRegDetails.cs?request_locale=en_US" target="_blank" className="[text-decoration-skip-ink:none] decoration-solid font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic text-[#00594f] tracking-[1px] underline">logged in</a> go to "Banking Information" and add a bank account that your company will use to send employee contributions.</p>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Step">
      <Text4 />
    </div>
  );
}

function Steps3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Steps">
      <Step2 />
    </div>
  );
}

function NumberContainer4() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">3</p>
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#00594f] text-[16px] tracking-[1px] w-[min-content]">Complete setup and verify connection</p>
    </div>
  );
}

function AccordionExpanded4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Accordion/expanded">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[24px] relative size-full">
          <NumberContainer4 />
          <TextContainer4 />
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron-up">
            <div className="absolute inset-[28.12%_9.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5019 10.5023">
                <path clipRule="evenodd" d={svgPaths.p36fe5600} fill="var(--fill-0, #00594F)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00594f] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <p className="font-['Poppins',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full whitespace-pre-wrap">{"Then you can select Paychex or TJH Payroll from the screen to link up the integration.\n\nPaychex users must sign a Docusign from Paychex that will be emailed to you. Once signed, the integration is complete.\n\nOnce setup is complete, you will be re-routed to your CalSavers dashboard. You should see a \"Connected\" badge."}</p>
    </div>
  );
}

function Step4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Step">
      <Text6 />
    </div>
  );
}

function Steps5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Steps">
      <Step4 />
    </div>
  );
}

function Accordions() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Accordions">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion">
        <AccordionExpanded2 />
        <div className="bg-white relative shrink-0 w-full" data-name="Step=Step 3">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
              <Steps3 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion">
        <AccordionExpanded1 />
        <div className="bg-white relative shrink-0 w-full" data-name="Step=Step 2">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
              <Steps2 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion">
        <AccordionExpanded4 />
        <div className="bg-white relative shrink-0 w-full" data-name="Step=Step 5">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
              <Steps5 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RegisterNovice() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[2]" data-name="Register/Novice">
      <Accordions />
    </div>
  );
}

function Group1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] isolate items-start relative shrink-0 w-full z-[1]" data-name="Group">
      <StepText />
      <RegisterNovice />
    </div>
  );
}

// Export the tab body content for use in the unified layout
export { Group1 as Tab3ToggleOffBodyContent };
