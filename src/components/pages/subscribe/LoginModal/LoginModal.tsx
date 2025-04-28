"use client";
import { FC, useState } from "react";
import scss from "./LoginModal.module.scss";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (token: string) => void;
  isLoading: boolean;
}

const LoginModal: FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLogin,
  isLoading
}) => {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("1");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    try {
      const response = await fetch("https://psgamezz.ru/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      });
      
      if (!response.ok) {
        throw new Error(`Authentication failed: ${response.status}`);
      }
      
      const data = await response.json();
      if (data.token) {
        onLogin(data.token);
      } else {
        setError("Не удалось получить токен");
      }
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.message || "Ошибка при авторизации");
    }
  };

  return (
    <div className={scss.modalOverlay}>
      <div className={scss.modalContent}>
        <button className={scss.closeButton} onClick={onClose}>
          &times;
        </button>
        
        <h2>Авторизация</h2>
        
        {error && <div className={scss.errorMessage}>{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className={scss.formGroup}>
            <label htmlFor="username">Имя пользователя</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              required
            />
          </div>
          
          <button 
            type="submit" 
            className={scss.loginButton}
            disabled={isLoading}
          >
            {isLoading ? "Загрузка..." : "Войти"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
