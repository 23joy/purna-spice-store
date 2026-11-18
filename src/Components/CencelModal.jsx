"use client";

import {Rocket} from "@gravity-ui/icons";
import {Button, Modal} from "@heroui/react";

export function CencelModal({bookingId}) {
    const handleDelete=async()=>{
        const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/mybooking/${bookingId}`,{
            method:"DELETE",
            headers:{
                'content-type':'application/json'
            }
        })
        const data =await res.json()
        window.location.reload()
        console.log(data)
    }
     return (
    <Modal>
      <Button variant="secondary">Cencel</Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px]">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-default text-foreground">
                <Rocket className="size-5" />
              </Modal.Icon>
              <Modal.Heading>আপনি কি বুকিংটি মুছে ফেলতে চান?</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <p>
                আপনি কি নিশ্চিত যে এই বুকিংটি মুছে ফেলতে চান? একবার মুছে ফেললে এটি আর ফিরে পাওয়া যাবে না।
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button className="w-full" slot="close" variant="outline">
                cencle
              </Button>
              <Button onClick={handleDelete} variant="danger" className="w-full" slot="close">
                Delete
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}