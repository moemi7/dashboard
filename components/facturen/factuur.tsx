import getCurrentUser from "../../app/actions/getCurrentUser"; 
import getInvoices, { IInvoicesParams } from "../../app/actions/getInvoices";

import InvoiceCard from "./InvoiceCard";
import EmptyState from "../../components/shared/EmptyState"
import HeaderControls from "../../components/shared/HeaderControls";

interface factuurProps {
    searchParams: IInvoicesParams;
  }
  
  const Factuur = async ({ searchParams }: factuurProps) => {
    const invoices = await getInvoices(searchParams);
    const currentUser = await getCurrentUser();
  
    if (invoices.length === 0) {
      return (
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
      );
    }
  
    return (
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
    );
  };