export const dynamic = "force-dynamic";


import BreadCrumb from "@/components/breadcrumb";
import { Factuur } from "@/components/facturen/factuur";
import { ScrollArea } from "@/components/ui/scroll-area";




const breadcrumbItems = [{ title: "Facturen", link: "/dashboard/facturen" }];


export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />


        <Factuur/>

      </div>
    </ScrollArea>
  );
}
