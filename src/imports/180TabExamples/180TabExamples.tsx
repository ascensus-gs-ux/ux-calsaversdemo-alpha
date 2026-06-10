import svgPaths from "./svg-eovqmbbazp";

function Text2() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Text">
      <a className="block cursor-pointer font-['Poppins',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[0px] tracking-[1px] w-full" href="mailto:pps@ascensus.com" target="_blank">
        <p className="text-[16px] whitespace-pre-wrap">
          <span className="leading-[24px]">
            Some payroll providers have the option to upload files to CalSavers with a 180° connection. With this access, you would need to send updated employee contribution rates to your payroll provider prior to each pay date. Then the payroll provider uploads the employee payroll file to CalSavers.
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            {`If you are interested in this type of integration, contact your payroll provider for more information, including any fees and set-up assistance. Your payroll provider can contact `}
          </span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic text-[#00594f] tracking-[1px] underline">pps@ascensus.com</span>
          <span className="leading-[24px]">{` for support. `}</span>
        </p>
      </a>
    </div>
  );
}

function InnerContainer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="InnerContainer">
      <Text2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Poppins',sans-serif] font-medium leading-[32px] not-italic relative shrink-0 text-[20px] text-black tracking-[1px] w-full">Payroll File Upload Overview</p>
      <InnerContainer1 />
    </div>
  );
}

function InnerContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full z-[1]" data-name="InnerContainer">
      <Frame2 />
    </div>
  );
}

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

function Group6() {
  return (
    <button className="cursor-pointer grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#e6e6e6] border border-[#d3d3d3] border-solid col-1 h-[24px] ml-0 mt-0 relative rounded-[24px] row-1 w-[44px]" data-name="Background" />
      <Switch />
    </button>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <p className="font-['Poppins',sans-serif] italic leading-[24px] relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full min-w-0 break-words">Untoggle to see a more detailed walk-though</p>
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="QuickViewToggle">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Toggle Switch">
          <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-right tracking-[1px] min-w-0 break-words">Quick Overview Instructions</p>
          <Group6 />
        </div>
      </div>
    </div>
  );
}

function StepText() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full z-[3]" data-name="StepText">
      <p className="flex-[1_0_0] font-['Poppins',sans-serif] font-medium leading-[32px] min-w-px not-italic relative text-[20px] text-black tracking-[1px]">Setup guide to integrate payroll with a 180° integration</p>
      <Frame />
    </div>
  );
}

function NumberContainer() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">1</p>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#00594f] text-[16px] tracking-[1px] w-[min-content]">Log into the CalSavers employer dashboard to start the integration set up</p>
    </div>
  );
}

function AccordionExpanded() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Accordion/expanded">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[24px] relative size-full">
          <NumberContainer />
          <TextContainer />
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

function Text5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="font-['Poppins',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[0px] tracking-[1px] w-full whitespace-pre-wrap">
        <p className="mb-0 text-[16px]">
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic text-[#00594f] tracking-[1px] underline">Log in</span>
          <span className="leading-[24px]">{` to the employer portal and select "Payroll Provider" on the left-hand side of the screen under Dashboard.`}</span>
        </p>
        <p className="leading-[24px] mb-0 text-[16px]">​</p>
        <p className="leading-[24px] mb-0 text-[16px]">Select "Add New" to start the payroll integration process.</p>
        <p className="leading-[24px] mb-0 text-[16px]">​</p>
        <p className="leading-[24px] text-[16px]">​</p>
      </div>
    </div>
  );
}

function Step() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Step">
      <Text5 />
    </div>
  );
}

function Steps2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Steps">
      <Step />
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
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#00594f] text-[16px] tracking-[1px] w-[min-content]">{`Select your payroll provider in the vendor list. `}</p>
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
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron-down">
            <div className="absolute inset-[28.12%_9.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5023 10.5027">
                <path clipRule="evenodd" d={svgPaths.p979b300} fill="var(--fill-0, #00594F)" fillRule="evenodd" id="Vector" />
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
      <div className="font-['Poppins',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full whitespace-pre-wrap">
        <p className="leading-[24px] mb-0">{`Choose "I have a different payroll provider" and search for your payroll vendor in the vendor list. `}</p>
        <p className="leading-[24px] mb-0">​</p>
        <p className="leading-[24px]">If your payroll service only participates in payroll file upload (180° integration), you will be able to continue to review your account representatives information.</p>
      </div>
    </div>
  );
}

function Step1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Step">
      <Text6 />
    </div>
  );
}

function Steps3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Steps">
      <Step1 />
    </div>
  );
}

function NumberContainer2() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">3</p>
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#00594f] text-[16px] tracking-[1px] w-[min-content]">{`Review payroll representative's contact information `}</p>
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
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron-down">
            <div className="absolute inset-[28.12%_9.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5023 10.5027">
                <path clipRule="evenodd" d={svgPaths.p979b300} fill="var(--fill-0, #00594F)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00594f] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="font-['Poppins',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full whitespace-pre-wrap">
        <p className="leading-[24px] mb-0">Add or use a previously added bank account that your company will use to send employee contributions.</p>
        <p className="leading-[24px] mb-0">​</p>
        <p className="leading-[24px]">{`If your bank account isn't added, select "Add a bank account" to enter your routing and account numbers. You will have to option to provide a customized account nickname if you have multiple bank accounts. `}</p>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Step">
      <Text7 />
    </div>
  );
}

function Steps4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Steps">
      <Step2 />
    </div>
  );
}

function NumberContainer3() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">4</p>
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#00594f] text-[16px] tracking-[1px] w-[min-content]">Set up banking for future employee contributions</p>
    </div>
  );
}

function AccordionExpanded3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Accordion/expanded">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[24px] relative size-full">
          <NumberContainer3 />
          <TextContainer3 />
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron-down">
            <div className="absolute inset-[28.12%_9.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5023 10.5027">
                <path clipRule="evenodd" d={svgPaths.p979b300} fill="var(--fill-0, #00594F)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00594f] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="font-['Poppins',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-full whitespace-pre-wrap">
        <p className="leading-[24px] mb-0">Add or use a previously added bank account that your company will use to send employee contributions.</p>
        <p className="leading-[24px] mb-0">​</p>
        <p className="leading-[24px]">{`If your bank account isn't added, select "Add a bank account" to enter your routing and account numbers. You will have to option to provide a customized account nickname if you have multiple bank accounts. `}</p>
      </div>
    </div>
  );
}

function Step3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Step">
      <Text8 />
    </div>
  );
}

function Steps5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Steps">
      <Step3 />
    </div>
  );
}

function NumberContainer4() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">5</p>
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#00594f] text-[16px] tracking-[1px] w-[min-content]">Submit the invite request to your payroll representative to finish the set up</p>
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
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron-down">
            <div className="absolute inset-[28.12%_9.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5023 10.5027">
                <path clipRule="evenodd" d={svgPaths.p979b300} fill="var(--fill-0, #00594F)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00594f] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <div className="font-['Poppins',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[0px] tracking-[1px] w-full whitespace-pre-wrap">
        <p className="mb-0 text-[16px]">
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic text-[#00594f] tracking-[1px] underline">Log in</span>
          <span className="leading-[24px]">{` to the employer portal and select "Payroll Provider" on the left-hand side of the screen under Dashboard.`}</span>
        </p>
        <p className="leading-[24px] mb-0 text-[16px]">​</p>
        <p className="leading-[24px] mb-0 text-[16px]">Select "Add New" to start the payroll integration process.</p>
        <p className="leading-[24px] mb-0 text-[16px]">​</p>
        <p className="leading-[24px] text-[16px]">​</p>
      </div>
    </div>
  );
}

function Step4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Step">
      <Text9 />
    </div>
  );
}

function Steps6() {
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
        <AccordionExpanded />
        <div className="bg-white relative shrink-0 w-full" data-name="Step=Step 1">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
              <Steps2 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Accordion">
        <AccordionExpanded1 />
        <div className="bg-white h-0 opacity-0 relative shrink-0 w-full" data-name="Step=Step 2">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
              <Steps3 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Accordion">
        <AccordionExpanded2 />
        <div className="bg-white h-0 opacity-0 relative shrink-0 w-full" data-name="Step=Step 4">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
              <Steps4 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Accordion">
        <AccordionExpanded3 />
        <div className="bg-white h-0 opacity-0 relative shrink-0 w-full" data-name="Step=Step 4">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
              <Steps5 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Accordion">
        <AccordionExpanded4 />
        <div className="bg-white h-0 opacity-0 relative shrink-0 w-full" data-name="Step=Step 1">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
              <Steps6 />
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

function Group2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] isolate items-start relative shrink-0 w-full" data-name="Group">
      <StepText />
      <RegisterNovice />
    </div>
  );
}

function Switch1() {
  return (
    <div className="col-1 ml-[21px] mt-px relative row-1 size-[22px]" data-name="Switch">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Switch">
          <circle cx="11" cy="11" fill="var(--fill-0, white)" id="Ellipse 1" r="11" />
          <g id="Frame 1344">
            <path d={svgPaths.p25fc6700} id="Rectangle 47" stroke="var(--stroke-0, #00594F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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
      <Switch1 />
    </button>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[392px]">
      <p className="font-['Poppins',sans-serif] italic italic leading-[24px] min-w-full relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[1px] w-[min-content]">Need a simplified walk-though?</p>
      <div className="content-stretch flex items-start relative shrink-0" data-name="QuickViewToggle">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Toggle Switch">
          <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-right tracking-[1px] whitespace-nowrap">Toggle Quick Overview Instructions</p>
          <Group5 />
        </div>
      </div>
    </div>
  );
}

function StepText1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full z-[3]" data-name="StepText">
      <p className="flex-[1_0_0] font-['Poppins',sans-serif] font-medium leading-[32px] min-w-px not-italic relative text-[20px] text-black tracking-[1px]">Setup guide to integrate payroll with a 180° integration</p>
      <Frame1 />
    </div>
  );
}

function NumberContainer5() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">1</p>
    </div>
  );
}

function TextContainer5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] tracking-[1px] w-full" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold relative shrink-0 text-black w-full">Log in to your account and go to "Payroll Provider" to begin adding your provider</p>
      <p className="font-['Poppins',sans-serif] relative shrink-0 text-[#6b6b6b] w-full">{`Go to payroll provider and select "Add New." Choose "I have a different payroll provider" and search for your payroll provider in the participating vendor list. `}</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Container">
      <TextContainer5 />
      <a className="bg-[#00594f] content-stretch cursor-pointer flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" href="https://employer.calsavers.com/californiaertpl/enroll/createEmp/viewCollectEmpPreRegDetails.cs?request_locale=en_US" target="_blank" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#00473f] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
        <div className="flex flex-col font-['Poppins',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[1px] whitespace-nowrap">
          <p className="leading-[24px]">Account Login</p>
        </div>
      </a>
    </div>
  );
}

function Step5() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch" data-name="Step 1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-start p-[24px] relative size-full">
          <NumberContainer5 />
          <Container17 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function NumberContainer6() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">1</p>
    </div>
  );
}

function TextContainer6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic relative tracking-[1px]" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] text-black w-full">Review payroll representative's contact information</p>
      <div className="font-['Poppins',sans-serif] leading-[0] relative shrink-0 text-[#6b6b6b] text-[0px] w-full whitespace-pre-wrap">
        <p className="leading-[24px] mb-0 text-[16px]">Review if your listed payroll representative's contact information is correct.</p>
        <p className="leading-[24px] mb-0 text-[16px]">​</p>
        <p className="text-[16px]">
          <span className="leading-[24px]">{`If the representative contact information is incorrect, please contact client services at (855) 650-6916 M-F 8am-8pm EST, or `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Poppins',sans-serif] font-semibold leading-[24px] not-italic text-[#00594f] tracking-[1px] underline">clientservices@calsavers.com</span>
          <span className="leading-[24px]">.</span>
        </p>
      </div>
    </div>
  );
}

function Step6() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch" data-name="Step 2">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-start p-[24px] relative size-full">
          <NumberContainer6 />
          <TextContainer6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] h-[268px] items-start relative shrink-0 w-full" data-name="Row">
      <Step5 />
      <Step6 />
    </div>
  );
}

function NumberContainer7() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">3</p>
    </div>
  );
}

function TextContainer7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[24px] min-w-px not-italic relative text-[16px] tracking-[1px]" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold relative shrink-0 text-black w-full">Add a bank or select a previously added account</p>
      <p className="font-['Poppins',sans-serif] relative shrink-0 text-[#6b6b6b] w-full">Select a bank account that your company will use to send employee contributions.</p>
    </div>
  );
}

function Step7() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch" data-name="Step 3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-start p-[24px] relative size-full">
          <NumberContainer7 />
          <TextContainer7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function NumberContainer8() {
  return (
    <div className="bg-[#80641f] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 size-[32px]" data-name="Number Container">
      <p className="font-['Poppins',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1px] w-full">4</p>
    </div>
  );
}

function TextContainer8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[24px] min-w-px not-italic relative text-[16px] tracking-[1px]" data-name="Text Container">
      <p className="font-['Poppins',sans-serif] font-semibold relative shrink-0 text-black w-full">Submit to invite your payroll representative to manage your account</p>
      <p className="font-['Poppins',sans-serif] relative shrink-0 text-[#6b6b6b] w-full">Once the invite is sent, your representative will receive an email to start the file upload process with CalSavers.</p>
    </div>
  );
}

function Step8() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch" data-name="Step 4">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-start p-[24px] relative size-full">
          <NumberContainer8 />
          <TextContainer8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[24px] h-[172px] items-start relative shrink-0 w-full" data-name="Row">
      <Step7 />
      <Step8 />
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

function Group4() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] isolate items-start relative shrink-0 w-full" data-name="Group">
      <StepText1 />
      <RegisterExerienced />
    </div>
  );
}

// Export the tab body content for use in the unified layout
// Export the tab body content for use in the unified layout
export { InnerContainer as Tab180OverviewContent };
