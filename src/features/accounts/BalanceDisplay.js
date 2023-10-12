import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const balance = useSelector((story) => story.account.balance);
  const isLoading = useSelector((story) => story.account.isLoading);
  if (isLoading)
    return <div className="balance"> Your money is being converted</div>;
  return <div className="balance">{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;
