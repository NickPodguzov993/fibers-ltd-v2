import { Modal } from "../shared/modal";

type MobileMenuModalProps = {
  open?: boolean;
  onClose?: () => void;
};

export function MobileMenuModal({ open, onClose }: MobileMenuModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      mobile menu
    </Modal>
  );
}
