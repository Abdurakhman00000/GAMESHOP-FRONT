"use client";

import { FC, useState } from "react";
import scss from "./CheckoutModal.module.scss";
import Image from "next/image";
import psLogo from "../../../../../../public/images/ps-plus/cool_img.svg";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (username: string, password: string) => void;
  isLoading: boolean;
  selectedPeriod: {
    months: number;
    price: string;
  } | null;
  consoleType: 'PS4' | 'PS5';
}

const CheckoutModal: FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  onLogin,
  isLoading,
  selectedPeriod,
  consoleType
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!isOpen || !selectedPeriod) return null;

  const formatPrice = (price: string): string => {
    return Math.floor(parseFloat(price)).toString();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!username || !password) {
      setError("Пожалуйста, введите имя пользователя и пароль");
      return;
    }
    
    onLogin(username, password);
  };

  return (
    <div className={scss.modalOverlay}>
      <div className={scss.modalContent}>
        <button className={scss.closeButton} onClick={onClose}>
          <span className={scss.closeIcon}>×</span>
          <span className={scss.closeText}>Закрыть</span>
        </button>
        
        <h2 className={scss.orderTitle}>Ваш заказ:</h2>
        
        <div className={scss.orderSummary}>
          <div className={scss.productInfo}>
            <div className={scss.productHeader}>
              <div className={scss.productImage}>
                <Image 
                  src={psLogo}
                  alt="PlayStation Plus логотип"
                  width={50}
                  height={50}
                />
              </div>
              <div className={scss.productTitle}>
                <h3>Подписка Playstation на {selectedPeriod.months} месяцев</h3>
              </div>
            </div>
            
            <div className={scss.productDetails}>
              <p>Вариант подписки: PS Plus Essential</p>
              <p>Консоль: {consoleType}</p>
            </div>
            
            <div className={scss.productPrice}>
              <p>{formatPrice(selectedPeriod.price)} ₽</p>
            </div>
          </div>
        </div>
        
        <div className={scss.totalPrice}>
          <p>Сумма: {formatPrice(selectedPeriod.price)} ₽</p>
        </div>
        
        {error && <div className={scss.errorMessage}>{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className={scss.formGroup}>
            <label htmlFor="username">Имя пользователя</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Введите имя пользователя"
              required
            />
          </div>
          
          <div className={scss.formGroup}>
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
              required
            />
          </div>
          
          <button 
            type="submit" 
            className={scss.checkoutButton}
            disabled={isLoading}
          >
            {isLoading ? "Обработка..." : "Оплатить"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;
