"use client";
import { FC, useState, useCallback, memo } from "react";
import scss from "./CheckoutModal.module.scss";
import Image from "next/image";
import { Period } from "../PsPlus/Right-content/RightContent";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  subscriptionData: {
    name: string;
    level: string;
    console: string;
    period: Period;
  } | null;
  onSubmit: (username: string, password: string) => void;
  isLoading: boolean;
}

const CheckoutModal: FC<CheckoutModalProps> = memo(({
  isOpen,
  onClose,
  subscriptionData,
  onSubmit,
  isLoading
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!username.trim() || !password.trim()) {
      setError("Пожалуйста, заполните все поля");
      return;
    }
    
    onSubmit(username, password);
  }, [username, password, onSubmit]);

  const handleUsernameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  if (!isOpen || !subscriptionData) return null;

  // Форматируем цену без добавления ".00"
  const formattedPrice = subscriptionData.period.price.split('.')[0];

  return (
    <div className={scss.modalOverlay}>
      <div className={scss.modalContent}>
        <button className={scss.closeButton} onClick={onClose}>
          &times;
        </button>
        
        <h2 className={scss.orderTitle}>Ваш заказ:</h2>
        
        <div className={scss.orderSummary}>
          <div className={scss.productInfo}>
            <div className={scss.productHeader}>
              <div className={scss.productImage}>
                <Image
                  src="/images/ps-plus/cool_img.svg"
                  alt="PlayStation Plus"
                  width={60}
                  height={60}
                />
              </div>
              <div className={scss.productTitle}>
                <h3>Подписка Playstation на {subscriptionData.period.months} месяцев</h3>
              </div>
            </div>
            
            <div className={scss.productDetails}>
              <p>Вариант подписки: PS Plus {subscriptionData.level}</p>
              <p>Консоль: {subscriptionData.console}</p>
            </div>
            
            <div className={scss.productPrice}>
              <p>{formattedPrice} ₽</p>
              <button className={scss.removeButton} onClick={onClose}>×</button>
            </div>
          </div>
        </div>
        
        <div className={scss.totalPrice}>
          <p>Сумма: {formattedPrice} ₽</p>
        </div>
        
        {error && <div className={scss.errorMessage}>{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className={scss.formGroup}>
            <label htmlFor="username">Имя пользователя</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          
          <div className={scss.formGroup}>
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          
          <div className={scss.totalPrice}>
            <p>Сумма: {formattedPrice} ₽</p>
          </div>
          
          <button 
            type="submit" 
            className={scss.checkoutButton}
            disabled={isLoading}
          >
            {isLoading ? "Обработка..." : "Оформить заказ"}
          </button>
        </form>
      </div>
    </div>
  );
});

CheckoutModal.displayName = "CheckoutModal";

export default CheckoutModal;
