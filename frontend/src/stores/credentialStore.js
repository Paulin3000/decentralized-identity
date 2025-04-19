// src/stores/credentialStore.js
import { reactive } from "vue";
import switzerlandLogo from "../assets/switzerland.png";
import uzhLogo from "../assets/uzh-acronym.svg";
import sanitasLogo from "../assets/Sanitas_Logo_RGB_black.png";

// Constants
const HOLDER_DID = "did:ethr:0x7834ACE28B1050685201A64B09A576B14F31";
const VERIFICATION_METHOD = "Secure blockchain record";
const UZH_ISSUER_DID = "did:ethr:0xAA0E8C1F1E262F5F9A9E4B7E520CB5DD7FE";

// Create a reactive store with all our credentials data
const credentialsData = reactive({
  "national-id-1": {
    id: "national-id-1",
    type: "National ID",
    subheading: "Citizen of Switzerland\n",
    verified: true,
    holder: "John Appleseed",
    holderDid: HOLDER_DID,
    issuer: "Swiss Federal Office",
    issuerDid: "did:ethr:0xB92F7E36CB64DBB3A9A5A75FE9D6DBC24E",
    expiryDate: "June 30, 2028",
    logoUrl: switzerlandLogo,
    colorTheme: "pink",
    issuanceDate: "January 15, 2023",
    additionalData: {
      firstName: "John",
      lastName: "Appleseed",
      dateOfBirth: "April 1, 1990",
      nationality: "Swiss",
      idNumber: "CH-ID-123456789",
    },
    verification: {
      lastVerified: "May 12, 2023",
      method: VERIFICATION_METHOD,
    },
  },
  "degree-id-1": {
    id: "degree-id-1",
    type: "University Degree",
    subheading: "B.Sc. in Computer Science",
    verified: true,
    holder: "John Appleseed",
    holderDid: HOLDER_DID,
    issuer: "University of Zurich",
    issuerDid: "did:ethr:0x4A0E8C1F1E262F5F9A9E4B7E520CB5DD7FE",
    expiryDate: "January 1, 2099",
    logoUrl: uzhLogo,
    colorTheme: "blue",
    issuanceDate: "July 6, 2025",
    additionalData: {
      firstName: "John",
      lastName: "Appleseed",
      degree: "Bachelor of Science",
      field: "Computer Science",
      graduationDate: "April 30, 2025",
      gpa: "4.25 / 6.0",
    },
    verification: {
      lastVerified: "July 16, 2025",
      method: VERIFICATION_METHOD,
    },
  },
  "drivers-license-id-1": {
    id: "drivers-license-id-1",
    type: "Driver's License",
    subheading: "Licensed Driver - Class B",
    verified: false,
    holder: "John Appleseed",
    holderDid: HOLDER_DID,
    issuer: "Department of Transportation",
    issuerDid: "did:ethr:0x5D924E5CD8E09B76C5F1D0A05CE3C931B97",
    expiryDate: "March 15, 2027",
    logoUrl: switzerlandLogo,
    colorTheme: "pink",
    issuanceDate: "March 15, 2022",
    additionalData: {
      firstName: "John",
      lastName: "Appleseed",
      licenseClass: "B",
      restrictions: "None",
      licenseNumber: "DR-987654321",
    },
    verification: {
      lastVerified: "January 5, 2023",
      method: VERIFICATION_METHOD,
    },
  },
  "health-insurance-id-1": {
    id: "health-insurance-id-1",
    type: "Health Insurance",
    subheading: "Full Medical Coverage",
    verified: true,
    holder: "John Appleseed",
    holderDid: HOLDER_DID,
    issuer: "Sanitas",
    issuerDid: "did:ethr:0xE782A9F43E21AAC99109D4323FA28E0F1CE",
    expiryDate: "March 15, 2027",
    logoUrl: sanitasLogo,
    colorTheme: "orange",
    issuanceDate: "January 1, 2023",
    additionalData: {
      firstName: "John",
      lastName: "Appleseed",
      policyNumber: "SAN-123456",
      coverageType: "Full Coverage",
      annualDeductible: "CHF 300",
    },
    verification: {
      lastVerified: "February 22, 2023",
      method: VERIFICATION_METHOD,
    },
  },
});

const credentialsDataIssuer = reactive({
  "degree-phd-1": {
    id: "degree-phd-1",
    type: "PhD Degree",
    subheading: "University of Zurich",
    verified: true,
    holder: "Sophie Müller",
    holderDid: "did:ethr:0x9A72BF45C1D80E4A243EEDD3F78ABC982D5E",
    issuer: "University of Zurich",
    issuerDid: UZH_ISSUER_DID,
    expiryDate: "January 1, 2099",
    logoUrl: uzhLogo,
    colorTheme: "blue",
    issuanceDate: "May 12, 2022",
    additionalData: {
      firstName: "Sophie",
      lastName: "Müller",
      degree: "Doctor of Philosophy",
      field: "Neuroscience",
      thesis: "Neural Correlates of Visual Perception",
      graduationDate: "May 10, 2022",
      supervisor: "Prof. Dr. Hans Weber",
      department: "Faculty of Science",
      dateOfBirth: "March 15, 1988",
      ects: "240",
    },
    verification: {
      lastVerified: "May 20, 2022",
      method: VERIFICATION_METHOD,
    },
  },
  "degree-masters-1": {
    id: "degree-masters-1",
    type: "Master's Degree",
    subheading: "University of Zurich",
    verified: true,
    holder: "Lukas Schmid",
    holderDid: "did:ethr:0x4B3FDA567E12CF89AE1D56278901CBA45F9",
    issuer: "University of Zurich",
    issuerDid: UZH_ISSUER_DID,
    expiryDate: "January 1, 2099",
    logoUrl: uzhLogo,
    colorTheme: "blue",
    issuanceDate: "June 25, 2023",
    additionalData: {
      firstName: "Lukas",
      lastName: "Schmid",
      degree: "Master of Science",
      field: "Artificial Intelligence",
      thesis: "Explainable AI in Healthcare Applications",
      graduationDate: "June 20, 2023",
      gpa: "5.8/6.0",
      department: "Department of Informatics",
      dateOfBirth: "January 8, 1995",
      ects: "120",
    },
    verification: {
      lastVerified: "June 30, 2023",
      method: VERIFICATION_METHOD,
    },
  },
  "certificate-blockchain-1": {
    id: "certificate-blockchain-1",
    type: "Professional Certificate",
    subheading: "University of Zurich",
    verified: true,
    holder: "Elena Rossi",
    holderDid: "did:ethr:0x3CF82AB5D98E4C1A7FB256EA790D45F12E",
    issuer: "University of Zurich",
    issuerDid: UZH_ISSUER_DID,
    expiryDate: "December 31, 2025",
    logoUrl: uzhLogo,
    colorTheme: "blue",
    issuanceDate: "November 10, 2023",
    additionalData: {
      firstName: "Elena",
      lastName: "Rossi",
      certificateName: "Blockchain Technologies",
      courseCompleted: "November 5, 2023",
      finalGrade: "4.8/6.0",
      instructor: "Prof. Dr. Michael Bernstein",
      programLength: "120 hours",
      skillsAcquired:
        "Smart Contract Development, Blockchain Architecture, Cryptography",
      department: "Department of Banking and Finance",
      ects: "10",
    },
    verification: {
      lastVerified: "November 15, 2023",
      method: VERIFICATION_METHOD,
    },
  },
  "degree-bachelors-1": {
    id: "degree-bachelors-1",
    type: "Bachelor's Degree",
    subheading: "University of Zurich",
    verified: true,
    holder: "Thomas Keller",
    holderDid: "did:ethr:0x7C19DF56A8E29F4C3B612DE871A95D37CE5",
    issuer: "University of Zurich",
    issuerDid: UZH_ISSUER_DID,
    expiryDate: "January 1, 2099",
    logoUrl: uzhLogo,
    colorTheme: "blue",
    issuanceDate: "July 15, 2024",
    additionalData: {
      firstName: "Thomas",
      lastName: "Keller",
      degree: "Bachelor of Arts",
      field: "Economics",
      graduationDate: "July 10, 2024",
      gpa: "5.2/6.0",
      department: "Department of Economics",
      thesis: "Impact of Digital Currencies on Traditional Banking",
      dateOfBirth: "April 22, 1997",
      ects: "180",
    },
    verification: {
      lastVerified: "July 20, 2024",
      method: VERIFICATION_METHOD,
    },
  },
  "certificate-datascience-1": {
    id: "certificate-datascience-1",
    type: "Professional Certificate",
    subheading: "University of Zurich",
    verified: false,
    holder: "Anna Fischer",
    holderDid: "did:ethr:0x2A5DE8F94B671C3A9F5D2E86B7C498A2F7",
    issuer: "University of Zurich",
    issuerDid: UZH_ISSUER_DID,
    expiryDate: "January 15, 2026",
    logoUrl: uzhLogo,
    colorTheme: "blue",
    issuanceDate: "January 15, 2024",
    additionalData: {
      firstName: "Anna",
      lastName: "Fischer",
      certificateName: "Advanced Data Science",
      courseCompleted: "January 10, 2024",
      finalGrade: "5.75/6.0",
      instructor: "Prof. Dr. Sarah Johnson",
      programLength: "150 hours",
      skillsAcquired:
        "Machine Learning, Big Data Analytics, Statistical Modeling",
      projects: "Predictive Analysis of Climate Data",
      department: "Department of Informatics",
      ects: "15",
    },
    verification: {
      lastVerified: "January 20, 2024",
      method: VERIFICATION_METHOD,
    },
  },
});

export function getCredentialById(id) {
  return credentialsData[id] || null;
}

export function getAllCredentials() {
  return Object.values(credentialsData);
}

export function getIssuerCredentialById(id) {
  return credentialsDataIssuer[id] || null;
}

export function getAllIssuerCredentials() {
  return Object.values(credentialsDataIssuer);
}
