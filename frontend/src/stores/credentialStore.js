// src/stores/credentialStore.js
import { reactive } from "vue";
import switzerlandLogo from "../assets/switzerland.png";
import uzhLogo from "../assets/uzh-acronym.svg";
import sanitasLogo from "../assets/Sanitas_Logo_RGB_black.png";

// Constants
const HOLDER_DID = "did:ethr:0x7834ACE28B1050685201A64B09A576B14F31";
const VERIFICATION_METHOD = "Blockchain Registry Verification";

// Create a reactive store with all our credentials data
const credentialsData = reactive({
  "national-id-1": {
    id: "national-id-1",
    type: "National ID",
    subheading: "Government of Switzerland",
    verified: true,
    holder: "John Appleseeed",
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
    subheading: "University of Zurich",
    verified: true,
    holder: "John Appleseeed",
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
      gpa: "5.25/6.0",
    },
    verification: {
      lastVerified: "July 16, 2025",
      method: VERIFICATION_METHOD,
    },
  },
  "drivers-license-id-1": {
    id: "drivers-license-id-1",
    type: "Driver's License",
    subheading: "Department of Transportation",
    verified: false,
    holder: "John Appleseeed",
    holderDid: HOLDER_DID,
    issuer: "Strassenverkehrsamt",
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
    subheading: "National Healthcare System",
    verified: true,
    holder: "John Appleseeed",
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

// Function to get a credential by ID
export function getCredentialById(id) {
  return credentialsData[id] || null;
}

// Function to get all credentials
export function getAllCredentials() {
  return Object.values(credentialsData);
}
