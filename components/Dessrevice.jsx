
import { CardContent, Card } from "@/components/ui/card"

export function Dessrevice() {
  return (<>
    <div className="bg-gray-50/90 py-6 lg:py-12">
      <div className="container grid items-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Services</h1>
          <p
            className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We provide a wide range of IT services to help your business succeed.
          </p>
        </div>
      </div>
    </div>
  <div className="flex flex-col md:flex-row md:justify-center md:space-x-5">
    <section className="py-12 lg:py-24 flex flex-col">
      <div
        className="container items-center gap-4 px-4 md:px-6  lg:gap-10 bg-gray-500/30 rounded-lg p-20 py-52 flex flex-col">
        <div className="space-y-2 ">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Banking</h2>
          <p
            className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
             Prime Group Technologies provides tailored solutions for the banking sector, including core banking systems, digital banking platforms, risk management tools, compliance solutions, and consulting services, enabling banks to enhance operational efficiency, improve customer experience, and ensure regulatory compliance.
          </p>
        </div>
        <Card className="w-full max-w-sm mx-auto border none">
          <CardContent className="p-4">
            <ServerIcon className="mx-auto h-8 w-8" />
          </CardContent>
        </Card>
      </div>
    </section>
    <section className="py-12 lg:py-24 flex flex-col">
      <div
        className="container items-center gap-4 px-4  lg:gap-10 bg-stone-300 rounded-lg  p-20 py-52 flex flex-col">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">CyberSecurity</h2>
          <p
            className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
             With advanced cybersecurity solutions, Prime Group Technologies helps organizations safeguard against cyber threats, offering services such as threat detection, incident response, vulnerability assessments, security audits, and employee training to protect sensitive data and maintain business continuity.


          </p>
        </div>
        <Card className="w-full max-w-sm mx-auto border none">
          <CardContent className="p-4">
            <CloudIcon className="mx-auto h-8 w-8" />
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
  {/* invert colorsss
  ssssssssssssssssss
  sssssssssss */}

<div className="flex flex-col md:flex-row md:justify-center md:space-x-5 ">
    <section className="py-12 lg:py-24 flex flex-col">
      <div
        className="container items-center gap-4 px-4 md:px-6  lg:gap-10  bg-stone-300 rounded-lg p-20 py-52 flex flex-col">
        <div className="space-y-2 ">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Networking and Telecom</h2>
          <p
            className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
             Prime Group Technologies offers networking and telecommunications solutions, including network design, implementation, optimization, and management services, as well as telecom infrastructure setup, maintenance, and support, ensuring reliable connectivity and seamless communication for businesses.
          </p>
        </div>
        <Card className="w-full max-w-sm mx-auto border none">
          <CardContent className="p-4">
            <ServerIcon className="mx-auto h-8 w-8" />
          </CardContent>
        </Card>
      </div>
    </section>
    <section className="py-12 lg:py-24 flex flex-col">
      <div
        className="container items-center gap-4 px-4  lg:gap-10 bg-gray-500/30 rounded-lg p-20 py-52 flex flex-col">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Retail Industry</h2>
          <p
            className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
             Catering to the retail sector, Prime Group Technologies delivers solutions such as point-of-sale systems, inventory management software, customer analytics tools, e-commerce platforms, and omnichannel integration services, enabling retailers to optimize operations, enhance customer engagement, and drive sales growth.
          </p>
        </div>
        <Card className="w-full max-w-sm mx-auto border none">
          <CardContent className="p-4">
            <CloudIcon className="mx-auto h-8 w-8" />
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
  {/* ssssssssssssssssssssssssssss
  sssssssssssssssssssssssssssss */}
    <div className="flex flex-col md:flex-row md:justify-center md:space-x-5">
    <section className="py-12 lg:py-24 flex flex-col">
      <div
        className="container items-center gap-4 px-4 md:px-6  lg:gap-10 bg-gray-500/30 rounded-lg p-20 py-52 flex flex-col">
        <div className="space-y-2 ">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Manufacturing</h2>
          <p
            className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Prime Group Technologies provides manufacturing solutions encompassing production planning, inventory management, supply chain optimization, quality control, and asset management systems, empowering manufacturers to increase efficiency, reduce costs, and maintain high product quality.<p className="text-gray-500/0">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </p>
        </div>
        <Card className="w-full max-w-sm mx-auto border none">
          <CardContent className="p-4">
            <ServerIcon className="mx-auto h-8 w-8" />
          </CardContent>
        </Card>
      </div>
    </section>
    <section className="py-12 lg:py-24 flex flex-col">
      <div
        className="container items-center gap-4 px-4  lg:gap-10 bg-stone-300 rounded-lg p-20 py-52 flex flex-col">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Cloud Services</h2>
          <p
            className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Offering cloud solutions tailored to specific business needs, Prime Group Technologies facilitates cloud migration, infrastructure setup, data storage, backup, and disaster recovery services, enabling organizations to leverage the scalability, flexibility, and cost-effectiveness of cloud computing.
          </p>
        </div>
        <Card className="w-full max-w-sm mx-auto border none">
          <CardContent className="p-4">
            <CloudIcon className="mx-auto h-8 w-8" />
          </CardContent>
        </Card>
      </div>
    </section>
  </div>

  <div className="flex flex-col md:flex-row md:justify-center md:space-x-5 ">
    <section className="py-12 lg:py-24 flex flex-col">
      <div
        className="container items-center gap-4 px-4 md:px-6  lg:gap-10  bg-stone-300 rounded-lg p-20 py-52 flex flex-col">
        <div className="space-y-2 ">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Customer Relationship Management</h2>
          <p
            className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
           Prime Group Technologies delivers CRM solutions that enable businesses to manage customer interactions, track sales leads, automate marketing campaigns, and analyze customer data, fostering stronger relationships, improving customer satisfaction, and driving sales growth.
          </p>
        </div>
        <Card className="w-full max-w-sm mx-auto border none">
          <CardContent className="p-4">
            <ServerIcon className="mx-auto h-8 w-8" />
          </CardContent>
        </Card>
      </div>
    </section>
    <section className="py-12 lg:py-24 flex flex-col">
      <div
        className="container items-center gap-4 px-4  lg:gap-10 rounded-lg bg-gray-500/30 p-20 py-52 flex flex-col">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">SAP</h2>
          <p
            className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
             Prime Group Technologies specializes in SAP implementation, customization, integration, and support services, helping businesses leverage SAP's suite of enterprise resource planning (ERP) solutions to streamline operations, optimize processes, and achieve business objectives.
          </p>
        </div>
        <Card className="w-full max-w-sm mx-auto border none">
          <CardContent className="p-4">
            <CloudIcon className="mx-auto h-8 w-8" />
          </CardContent>
        </Card>
      </div>
    </section>
  </div>

  {/* sssssssssssssssss
  sssssssssssssssssssssss
  ssssssssssssss */}
  <div className="flex flex-col md:flex-row md:justify-center md:space-x-5">
    <section className="py-12 lg:py-24 flex flex-col">
      <div
        className="container items-center gap-4 px-4 md:px-6  lg:gap-10 bg-gray-500/30 rounded-lg p-20 py-52 flex flex-col">
        <div className="space-y-2 ">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Automated Ops</h2>
          <p
            className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Prime Group Technologies offers automated operations solutions, including robotic process automation (RPA), AI-driven automation, and workflow orchestration tools, to streamline repetitive tasks, improve efficiency, and reduce operational costs for businesses.
          </p>
        </div>
        <Card className="w-full max-w-sm mx-auto border none">
          <CardContent className="p-4">
            <ServerIcon className="mx-auto h-8 w-8" />
          </CardContent>
        </Card>
      </div>
    </section>
    <section className="py-12 lg:py-24 flex flex-col">
      <div
        className="container items-center gap-4 px-4  lg:gap-10 bg-stone-300 rounded-lg p-20 py-52 flex flex-col">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Digital Workspace</h2>
          <p
            className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Providing digital workspace solutions, Prime Group Technologies enables organizations to create collaborative, flexible, and secure work environments, integrating tools for remote work, document collaboration, virtual meetings, and employee productivity enhancement.
          </p>
        </div>
        <Card className="w-full max-w-sm mx-auto border none">
          <CardContent className="p-4">
            <CloudIcon className="mx-auto h-8 w-8" />
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
  {/* sssssssssssssssssssssssssssss
  sssssssssssssssssssssss */}
  <div className="flex flex-col md:flex-row md:justify-center md:space-x-5 ">
    <section className="py-12 lg:py-24 flex flex-col">
      <div
        className="container items-center gap-4 px-4 md:px-6  lg:gap-10  bg-stone-300 rounded-lg p-20 py-52 flex flex-col">
        <div className="space-y-2 ">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Service Management</h2>
          <p
            className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Prime Group Technologies delivers IT service management solutions to optimize IT processes, automate service delivery, track IT assets, and ensure compliance with ITIL best practices, enhancing the efficiency and reliability of IT operations.
          </p>
        </div>
        <Card className="w-full max-w-sm mx-auto border none">
          <CardContent className="p-4">
            <ServerIcon className="mx-auto h-8 w-8" />
          </CardContent>
        </Card>
      </div>
    </section>
    <section className="py-12 lg:py-24 flex flex-col">
      <div
        className="container items-center gap-4 px-4  lg:gap-10 bg-gray-500/30 rounded-lg p-20 py-52 flex flex-col">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Consulting Services</h2>
          <p
            className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            With a team of experienced consultants, Prime Group Technologies offers strategic consulting services to help businesses identify opportunities, overcome challenges, and achieve their goals through technology adoption, process optimization, and organizational transformation.
          </p>
        </div>
        <Card className="w-full max-w-sm mx-auto border none">
          <CardContent className="p-4">
            <CloudIcon className="mx-auto h-8 w-8" />
          </CardContent>
        </Card>
      </div>
    </section>
  </div>

  
  
    
  </>);
}


function ServerIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>)
  );
}


function CloudIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>)
  );
}


function ShieldCheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>)
  );
}


function LightbulbIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>)
  );
}
