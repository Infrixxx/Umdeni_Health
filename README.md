# 🏥 Umdeni Health

**Your Family's Digital Health Guardian**

[](https://llama.meta.com/)
[](https://www.google.com/search?q=)
[](https://www.google.com/search?q=)

> **"Umdeni"** means *Family* in isiZulu. We believe health is not just an individual burden, but a communal responsibility.

-----

## 🚩 The Problem

In South Africa's public healthcare sector, millions of patients—especially the elderly ("Gogos")—face three critical challenges:

1.  **The Lost File:** Physical patient records are frequently lost or damaged, leading to lack of continuity in care.
2.  **The Language Barrier:** Doctors often explain diagnoses in English medical jargon, while patients may speak isiZulu, Sesotho, or Xitsonga, leading to poor understanding and medication errors.
3.  **The Support Gap:** Family members want to help care for their elders but are excluded from the consultation room and lack the instructions needed to support them at home.

## 💡 The Solution

**Umdeni Health** is a privacy-first, offline-ready **Digital Health Wallet** powered by **Meta Llama 3**.

It bridges the gap between the clinic and the home by:

  * **Digitizing** the consultation instantly using AI.
  * **Translating** medical notes into local languages and voice explanations.
  * **Empowering** family members ("Helpers") with secure access to care instructions.

-----

## 🌟 Key Features

### 1\. 🩺 For the Doctor (Clinician Cockpit)

  * **Active Listening:** Records the consultation in real-time.
  * **Llama Extraction:** Instantly extracts **Diagnosis**, **Prescription**, and **ICD-10 Codes** from spoken audio.
  * **Push-to-Wallet:** Generates a QR code to securely transfer the digital record to the patient's phone. No internet required.

### 2\. 👵 For the Patient (Senior Mode)

  * **"Lalela" (Listen) Button:** Uses Llama to explain complex medication instructions in the patient's mother tongue (e.g., isiZulu) via voice.
  * **Simplified UI:** High-contrast, large buttons designed for elderly users and low-literacy contexts.
  * **Offline Access:** Medical records are stored locally on the device, accessible even during load shedding.

### 3\. 🤝 For the Family (The Helper)

  * **Secure Invite:** Patients authorize family members (e.g., a grandson) to view their care plan.
  * **Co-Pilot Chat:** Family members can ask the AI questions like *"Can Gogo eat spinach with this pill?"* and get safe, context-aware answers.

-----

## 🧠 How We Use Meta Llama 3

We move beyond simple chatbots by using Llama as an **Edge Reasoning Engine**:

1.  **Structured Extraction:** We prompt Llama to convert unstructured clinician speech into strict JSON objects (`{diagnosis: "...", medication: "..."}`) for the database.
2.  **Translation & Simplification:** Llama is prompted to act as a "Compassionate Nurse," translating clinical terms (e.g., "Hypertension") into culturally relevant explanations (e.g., "High Blood Pressure - avoid salt").
3.  **Edge Architecture:** By using quantized models, we aim to run inference locally or on a local clinic server, ensuring **POPIA compliance** (Patient data never leaves the premises).

-----

## 🛠️ Tech Stack (MVP)

  * **AI Engine:** Meta Llama 3 (via Groq/Ollama for hackathon speed).
  * **Backend:** Python (FastAPI).
  * **Frontend:** React Native / Flutter (Mobile).
  * **Design:** Figma (Wireframes & Prototype).
  * **Database:** SQLite (Local-first architecture).

-----

## 🚀 Getting Started

### Prerequisites

  * Python 3.9+
  * Node.js (for App)
  * An API Key for Llama inference (or local Ollama setup)

### Installation

1.  **Clone the repo**

    ```bash
    git clone https://github.com/your-username/umdeni-health.git
    cd umdeni-health
    ```

2.  **Install Backend Dependencies**

    ```bash
    cd backend
    pip install -r requirements.txt
    ```

3.  **Run the Server**

    ```bash
    uvicorn main:app --reload
    ```

4.  **Launch the Mobile App**

    ```bash
    cd mobile-app
    npm install
    npm start
    ```

-----

## 📱 User Flow (Demo)

1.  **Login:** Dr. Nkosi logs in and selects "Identify Patient".
2.  **Consult:** Doctor records audio: *"Patient has a sinus infection. Prescribing Amoxicillin."*
3.  **Process:** Llama structures the note. Doctor confirms and hits "Push to Wallet".
4.  **Receive:** Gogo scans the QR code. Her phone buzzes.
5.  **Explain:** Gogo taps "Ask Llama" and hears: *"Gogo, this medicine fights the infection in your nose. Take one pill after breakfast."* (in isiZulu).

-----

## 👥 The Team

  * **Boitumelo Rachoshi** * Lead Developer & AI Integration
  * **Tebatso Katane:** Backend & Database
  * **Zinhle Hlongwane:** UI/UX Design & Frontend
  * **Aphiwe Vuba :** Backend & AI
  * **Liyabona Mendela:** Backend,AI & Database

-----

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.

-----

> **Built with ❤️ in South Africa.**
