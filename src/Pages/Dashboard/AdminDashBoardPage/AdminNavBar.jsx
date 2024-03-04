import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/Components/ui/accordion'
import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavBar = () => {
  return (
    <div className=" flex flex-col w-[280px] bg-[#001F3F] text-white px-4">
      <h2 className="text-[#FFBF00] text-xl">Admin Users</h2>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className=" hover:no-underline">
            <h2 className="text-[#FFBF00] text-xl">Modules</h2>
          </AccordionTrigger>
          <AccordionContent>
            <div className=" space-y-4 mx-6 text-base">
              <div>
                <a href="/create-job">create job</a>
              </div>
              <div>
                <a href="/post-job">post job</a>
              </div>
              <div>
                <a href="">User Profiles</a>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default AdminNavBar
