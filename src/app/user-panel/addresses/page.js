"use client";

import { useState } from "react";
import AddressList from "@/components/AddressList/AddressList";
import AddressForm from "@/components/AddressForm/AddressForm";
import styles from "./UserAddresses.module.css";

export const metadata = {
  title: "فروشگاه کیمیا ترنج | صنایع دستی اصفهان ",
  description:
    "خرید صنایع دستی اصیل اصفهان و ایران؛ خاتم‌کاری، قلم‌زنی، مینیاتور، سماور برنجی، پک هدیه سازمانی و محصولات دست‌ساز با کیفیت.",
};

export default function UserAddressesPage() {
  const [refreshFlag, setRefreshFlag] = useState(0);

  const handleAddressAdded = () => {
    setRefreshFlag((prev) => prev + 1);
  };

  return (
    <div className={styles.addressesPage}>
      <AddressList refresh={refreshFlag} />
      <AddressForm onAddressAdded={handleAddressAdded} />
    </div>
  );
}
