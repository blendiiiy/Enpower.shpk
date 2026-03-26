-- Ekzekutoni këtë SQL në phpMyAdmin (zgjidhni databazën En-power.shpk ose emrin që keni)
-- Create table për formën e kontaktit + rezervimin e takimeve/telefonatave

CREATE TABLE IF NOT EXISTS contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NULL,
  message TEXT NOT NULL,
  request_type VARCHAR(20) NOT NULL DEFAULT 'general',
  preferred_date DATE NULL,
  preferred_time VARCHAR(50) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Mesazhet mund t'i shikoni nga phpMyAdmin → contact_messages
