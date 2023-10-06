import { Modal } from "../shared/modal";

type SignupModalProps = {
  open: boolean;
  onClose: () => void;
};

export function SignupModal({ open, onClose }: SignupModalProps) {
  return (
    <Modal
      className="w-[800px]"
      title={"Sign up"}
      open={open}
      onClose={onClose}
    >
      <div className="h-[400px]">signup</div>
    </Modal>
  );
}
