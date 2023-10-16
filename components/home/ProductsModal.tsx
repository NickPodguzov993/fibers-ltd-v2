import { Modal } from "../shared/modal";

type ProductsModalProps = {
  open?: boolean;
  onClose?: () => void;
};

export function ProductsModal({ open, onClose }: ProductsModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      products
    </Modal>
  );
}
