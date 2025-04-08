<template>
  <Header title="How It Works" :line="false"> </Header>
  <img
    :src="trustTriangle"
    class="illustration"
    alt="Triangle of Trust Illustration"
  />

  <div class="content">
    <h2>Understanding the Triangle of Trust</h2>

    <p class="text">
      When using a decentralized identity (DI) system like Mask Identity, three
      roles work together to help prove and verify identity in a trustworthy and
      secure way. This relationship is called the Triangle of Trust, and it
      involves:
    </p>

    <ul class="roles text">
      <li>• Issuer</li>
      <li>• Holder</li>
      <li>• Verifier</li>
    </ul>

    <p class="text">
      Each plays a key part in how digital credentials are created, stored, and
      verified. The diagram above illustrates how these roles interact.
    </p>

    <div class="role-section">
      <h3>1. Issuer – The Source of Trust</h3>
      <p>
        The Issuer is usually an institution like a university, government
        agency, or company. They create and digitally sign credentials (like a
        diploma, driver's license, or membership status). These credentials are
        then given to the Holder.
      </p>
      <p>
        Issuers also register the necessary data (e.g., schemas, public keys,
        and credential definitions) on the blockchain, which acts as a secure
        data registry. This allows other parties to later verify the
        credentials' authenticity without needing to contact the issuer again.
      </p>
    </div>

    <div class="role-section">
      <h3>2. Holder – The Owner of the Credentials</h3>
      <p>
        The Holder is typically an individual like you. You receive credentials
        from issuers and store them in a digital wallet like a Mask Identity.
        You control when and with whom to share your information.
      </p>
      <p>
        When you need to prove something (e.g., that you're over 18 or hold a
        valid certificate), you present the relevant credential to a Verifier.
      </p>
      <p>
        With Mask Identity, you can present selective proofs or even
        zero-knowledge proofs—allowing you to prove something without revealing
        all the underlying data (e.g., confirm you're over 18 without disclosing
        your exact birthdate).
      </p>
    </div>

    <div class="role-section">
      <h3>3. Verifier – The One Who Checks</h3>
      <p>
        The Verifier is the person, website, or organization that wants to
        confirm your credentials. This could be a bar checking your age, an
        employer verifying a certificate, or an app ensuring you're a member.
      </p>
      <p>
        The verifier checks your credentials against the data that the Issuer
        has published on the blockchain. This allows them to validate your
        claims (e.g., signature, expiration, revocation status) without directly
        contacting the issuer.
      </p>
    </div>

    <div class="summary-section">
      <h3>How It All Comes Together</h3>
      <ol>
        <li>
          1. The Issuer writes verification data to the blockchain and gives the
          credential to the Holder.
        </li>
        <li>
          2. The Holder stores the credential and later presents it to a
          Verifier.
        </li>
        <li>
          3. The Verifier checks the credential against the public data on the
          blockchain to confirm it is valid and trustworthy.
        </li>
      </ol>

      <p>This model ensures that:</p>
      <ul>
        <li>
          • You have full control over your credentials.You decide what to
          share, with whom, and when.
        </li>
        <li>
          • The Verifier doesn't need to trust you personally, only the trusted
          Issuer.
        </li>
        <li>
          • Your privacy is better protected through zero-knowledge proofs,
          reducing the risk of tracking and surveillance.
        </li>
        <li>
          • There’s no central database to hack, minimizing the risk of
          large-scale data breaches.
        </li>
        <li>
          • Credentials are cryptographically signed and tamper-proof, making
          them easy to verify and hard to fake.
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "../../components/Header.vue";
import trustTriangle from "../../assets/illustrations/trustTriangle.png";
</script>

<style scoped>
.illustration {
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 7rem;
  transform: scaleX(0.95);
}

.content {
  padding: 0 1.5rem 3rem;
  width: 100%;
  margin: 0 auto;
}

h2 {
  margin-bottom: 2rem;
  color: var(--color-text-primary);
}

h3 {
  margin-bottom: 0.75rem;
  color: var(--color-text-primary);
}

p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
}

.text {
  padding: 0 1rem;
}

.roles {
  margin: 1.25rem 0;
  font-weight: 700;
}

.role-section {
  margin: 3rem 0;
  padding: 1.5rem 1rem;
  background: rgba(73, 92, 248, 0.05);
  border-radius: 1rem;
  border: 1px solid rgba(73, 92, 248, 0.1);
}

.summary-section {
  margin-top: 2rem;
  padding: 1.5rem;
  background: rgba(73, 92, 248, 0.08);
  border-radius: 1rem;
  border: 1px solid rgba(73, 92, 248, 0.15);
}

ol,
ul {
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
  font-size: var(--text-lg);
}

li {
  margin-bottom: 0.5rem;
  text-align: left;
}
</style>
