

import { useMaticPrice } from "@components/hooks/useMaticPrice";
import { Modal, Button } from "@components/ui/common";
import { useEffect, useState } from "react";
import { useWeb3 } from "@components/providers";
import { useWalletInfo } from "@components/hooks/web3";

const defaultOrder = {
  price: ""
}

const _createFormState = (isDisabled = false, message = "") => ({isDisabled, message})

const createFormState = ({price}, hasAgreedTOS) => {
  if (!price || Number(price) <= 0) {
    return _createFormState(true, "Price is not valid.");
  } else if (!hasAgreedTOS) {
    return _createFormState(true, "You need to agree with terms of service in order to submit the form.");
  }
  
  return _createFormState();
}



export default function OrderModal({event, onClose}) {

    const [isOpen, setIsOpen] = useState(false);
    const [order, setOrder] = useState(defaultOrder);
    const [enablePrice, setEnablePrice] = useState(false);
    const [hasAgreedTOS, setHasAgreedTOS] = useState(false);
    const { matic } = useMaticPrice();
    const { web3, contract } = useWeb3();
    const { account } = useWalletInfo();

    const purchaseNFT = async () => {
      try {
        console.log("contract methods: ", contract);
        const value = web3.utils.toWei("0.001");
        await contract.methods.mint(1).send({from: account.data, value});
      } catch (error) {
        console.log("error: ", error);
      }
    }

    useEffect(() => {
        if (!!event) {
            setIsOpen(true);
            setOrder({
              ...defaultOrder,
              price: event.price
            })
        }
    }, [event])

    const closeModal = () => {
        setIsOpen(false);
        setOrder(defaultOrder);
        setEnablePrice(false);
        setHasAgreedTOS(false);
        onClose();
    }

  const formState = createFormState(order, hasAgreedTOS);

  return (
    <Modal isOpen={isOpen}>
      <div className="inline-block align-bottom bg-celoFaintGray-default rounded-sm text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 sm:mt-0 sm:text-left">
              <h3 className="mb-7 text-2xl font-bold leading-6 text-polygonBlack-default font-garamond" id="modal-title">
                {event.title}
              </h3>
              <div className="mt-1 relative rounded-sm">
                <div className="mb-1">
                  <label className="mb-2 font-bold">Price(USDC)</label>
                  <div className="text-xs text-gray-700 flex">
                    <label className="flex items-center mr-2">
                      <input
                        checked={enablePrice}
                        onChange={({target: {checked}}) => {
                          setOrder({
                            ...order,
                            price: checked ? order.price : matic.perItem
                          });
                          setEnablePrice(checked);
                        }}
                        type="checkbox"
                        className="form-checkbox"
                      />
                    </label>
                    <span>Adjust Price - only when the price is not correct</span>
                  </div>
                </div>  
                <input
                  disabled={!enablePrice}
                  value={order.price}
                  onChange={({target: {value}}) => {
                    if (isNaN(value)) { return; }
                    setOrder({
                      ...order,
                      price: value
                    })
                  }}
                  type="text"
                  name="price"
                  id="price"
                  className="disabled:opacity-50 w-full mb-1 focus:ring-polygonPurple-default shadow-md focus:border-polygonPurple-default block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
                />
                <p className="text-xs text-gray-700">
                  $1 is equal to 1 USDC.
                </p>
              </div>              
              <div className="text-xs text-gray-700 flex">
                <label className="flex items-center mr-2">
                  <input
                    checked={hasAgreedTOS}
                    onChange={({target: {checked}}) => {
                      setHasAgreedTOS(checked);
                    }}
                    type="checkbox"
                    className="form-checkbox" />
                </label>
                <span>I accept this 'terms of service' and I agree that my order can be rejected in the case data provided above are not correct</span>
              </div>
              {
                formState.message &&
                <div className="p-4 my-3 text-polygonWhite-default bg-polygonPurple-default text-sm">
                  {formState.message}
                </div>
              }
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 flex flex-row">
          <Button
            className="flex-1 mr-2"
            disabled={formState.isDisabled}
            onClick={() => {
              purchaseNFT();
            }}
            variant="green"
          >
            Submit
          </Button>
          <Button
            className="flex-1 ml-4"
            onClick={closeModal}
            variant="red"
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  )
}