import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as ChainIcon } from "../../../assets/chain.svg";
import { ReactComponent as LightningIcon } from "../../../assets/lightning.svg";

export enum TxType {
  ONCHAIN,
  LIGHTNING,
}

export type Props = {
  disabled?: boolean;
  invoiceType: TxType;
  onTxTypeChange: (txtype: TxType) => void;
};

const SwitchTxType: FC<Props> = ({ invoiceType, onTxTypeChange, disabled }) => {
  const { t } = useTranslation();

  const setTxTypeHandler = (txType: TxType) => {
    if (disabled) {
      return;
    }
    onTxTypeChange(txType);
  };

  return (
    <div>
      <button
        name="lightning"
        disabled={invoiceType === TxType.LIGHTNING}
        className="switch-button"
        onClick={() => setTxTypeHandler(TxType.LIGHTNING)}
      >
        <LightningIcon className="mr-1 inline h-6 w-6 align-bottom" />
        {t("home.lightning")}
      </button>

      <button
        name="onchain"
        disabled={invoiceType === TxType.ONCHAIN}
        className="switch-button"
        onClick={() => setTxTypeHandler(TxType.ONCHAIN)}
      >
        <ChainIcon className="mr-1 inline h-6 w-6 align-bottom" />
        {t("wallet.on_chain")}
      </button>
    </div>
  );
};

export default SwitchTxType;
