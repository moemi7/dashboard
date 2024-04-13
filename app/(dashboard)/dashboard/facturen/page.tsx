export const dynamic = "force-dynamic";


import BreadCrumb from "@/components/breadcrumb";
import getCurrentUser from "../../../../app/actions/getCurrentUser"; 
import getInvoices, { IInvoicesParams } from "../../../../app/actions/getInvoices";

import InvoiceCard from "../.././../../components/facturen/InvoiceCard";
import EmptyState from "../../../../components/shared/EmptyState"
import HeaderControls from "../../../../components/shared/HeaderControls";
import { ScrollArea } from "@/components/ui/scroll-area";




const breadcrumbItems = [{ title: "Facturen", link: "/dashboard/facturen" }];

interface HomeProps{
  searchParams: IInvoicesParams;
}



const Home: React.FC<HomeProps> = async (props) => { 
  const condition = true; // Define your condition here
  const { searchParams } = props; 
  const invoices = await getInvoices(searchParams);
  const currentUser = await getCurrentUser();

  if (invoices.length === 0) {
    return (
      <ScrollArea className="h-full">
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <BreadCrumb items={breadcrumbItems} />
          <>
      <HeaderControls
        currentUser={currentUser}
        numOfInvoices={invoices.length}
      />
      <EmptyState
        title="There is nothing here"
        subtitle="Create a new invoice by clicking the New Invoice button and get started"
      />
    </>
        </div>
      </ScrollArea>
    );
  } else {
    return (
      <ScrollArea className="h-full">
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <BreadCrumb items={breadcrumbItems} />
          <>
      <HeaderControls
        currentUser={currentUser}
        numOfInvoices={invoices.length}
      />
      <div className="flex flex-col gap-3 overflow-y-auto">
        {invoices.map((invoice, index) => (
          <InvoiceCard key={index} invoice={invoice} />
        ))}
      </div>
    </>
        </div>
      </ScrollArea>
    );
  }
}

export default Home;

//{invoices.map((invoice, index) => (
// <InvoiceCard key={index} invoice={invoice} />
//))}

//export default function page() {
 // return (
 //   <ScrollArea className="h-full">
 //     <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
 //       <BreadCrumb items={breadcrumbItems} />
 //       option a


  //      option b
   //   </div>
   // </ScrollArea>
 // );
//}
//if (invoices.length === 0) {
 // var a = 
 //   <>
  //    <HeaderControls
  //      currentUser={currentUser}
  //      numOfInvoices={invoices.length}
  //    />
  //    <EmptyState
  //      title="There is nothing here"
  //      subtitle="Create a new invoice by clicking the New Invoice button and get started"
  //    />
  //  </>
 // )};

 // var b =
  //(
  //  <>
  //    <HeaderControls
  //      currentUser={currentUser}
   //     numOfInvoices={invoices.length}
   //   />
   //   <div className="flex flex-col gap-3 overflow-y-auto">
   //     {invoices.map((invoice, index) => (
   //       <InvoiceCard key={index} invoice={invoice} />
  //      ))}
  //    </div>
 //   </>
 // )