import { PrimaryButton } from "../shared/buttons";
import { Modal } from "../shared/modal";

type SignupConfirmModalProps = {
  open: boolean;
  onClose: () => void;
};

export function SignupConfirmModal({ open, onClose }: SignupConfirmModalProps) {
  return (
    <Modal
      className="!max-w-[500px] !pt-4 lg:!pt-8"
      headerClass="hidden"
      closeClass="!hidden"
      open={open}
      onClose={onClose}
    >
      <div className="flex flex-col gap-4 lg:gap-6">
        <div className="h-[200px] bg-violet rounded overflow-hidden">image</div>
        <p className="text-center leading-paragraph text-dark lg:text-[18px]">
          Your data has been successfully received!
        </p>
        <PrimaryButton
          className="lg:px-8 lg:py-6 lg:text-[20px]"
          tabIndex={-1}
          onClick={onClose}
        >
          Cool
        </PrimaryButton>
      </div>
    </Modal>
  );
}
