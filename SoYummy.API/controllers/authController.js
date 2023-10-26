const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const bcrypt = require('bcrypt');

// Funkcja obsługująca rejestrację użytkownika
function registerUser(req, res) {
  const { username, password, email } = req.body;

  // Sprawdź, czy użytkownik o podanej nazwie użytkownika lub adresie email już istnieje w bazie danych
  User.findOne({ $or: [{ username }, { email }] }, (err, existingUser) => {
    if (err) {
      return res.status(500).json({ error: 'Błąd serwera' });
    }

    if (existingUser) {
      return res.status(400).json({ error: 'Użytkownik o takiej nazwie użytkownika lub adresie email już istnieje.' });
    }

    // Jeśli użytkownik nie istnieje, zahashuj hasło i zapisz do bazy danych
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ error: 'Błąd serwera' });
      }

      const newUser = new User({
        username,
        password: hashedPassword,
        email,
      });

      newUser.save((err) => {
        if (err) {
          return res.status(500).json({ error: 'Błąd serwera' });
        }

        // Zarejestrowano pomyślnie
        return res.status(201).json({ message: 'Rejestracja pomyślna' });
      });
    });
  });
}

// Funkcja obsługująca logowanie użytkownika
function loginUser(req, res) {
  const { username, password } = req.body;

  // Sprawdź, czy użytkownik o podanej nazwie użytkownika istnieje w bazie danych
  User.findOne({ username }, (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Błąd serwera' });
    }

    if (!user) {
      return res.status(404).json({ error: 'Użytkownik nie istnieje' });
    }

    // Porównaj hasło
    bcrypt.compare(password, user.password, (err, passwordMatch) => {
      if (err) {
        return res.status(500).json({ error: 'Błąd serwera' });
      }

      if (!passwordMatch) {
        return res.status(401).json({ error: 'Niepoprawne hasło' });
      }

      // Wygeneruj token JWT i zwróć go w odpowiedzi
      const token = jwt.sign({ userId: user._id }, config.jwtSecret);
      return res.status(200).json({ token });
    });
  });
}

// Funkcja obsługująca wylogowanie użytkownika
function logoutUser(req, res) {
  // Realizuj logikę wylogowania, na przykład usuwając token z bazy danych lub inaczej invaliderując sesję
  // Po wylogowaniu zwróć odpowiednią odpowiedź
  return res.status(200).json({ message: 'Wylogowano pomyślnie' });
}

// Funkcja obsługująca reset hasła użytkownika
function resetPassword(req, res) {
  // Realizuj logikę resetowania hasła, na przykład wysyłając e-mail z linkiem do resetowania
  // Po zakończeniu resetowania zwróć odpowiednią odpowiedź
  return res.status(200).json({ message: 'Reset hasła pomyślny' });
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  resetPassword
};
