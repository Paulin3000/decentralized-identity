<template>
  <div>
    <Header title="How It Works"> </Header>
    <div class="container">
      <img
        :src="trustTriangle"
        class="illustration"
        alt="Triangle of Trust Illustration"
      />
    </div>

    <div class="content">
      <h2>Understanding the Triangle of Trust in Decentralized Identity</h2>

      <p>
        When using a decentralized identity (DI) system like Polygon ID, three
        roles work together to help prove and verify identity in a trustworthy
        and secure way. This relationship is called the Triangle of Trust, and
        it involves:
      </p>

      <ul class="roles">
        <li>Issuer</li>
        <li>Holder</li>
        <li>Verifier</li>
      </ul>

      <p>
        Each plays a key part in how digital credentials are created, stored,
        and verified. The diagram above illustrates how these roles interact.
      </p>

      <div class="role-section">
        <h3>1. Issuer – The Source of Trust</h3>
        <p>
          The Issuer is usually an institution like a university, government
          agency, or company. They create and digitally sign credentials (like a
          diploma, driver's license, or membership status). These credentials
          are then given to the Holder.
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
          The Holder is typically an individual like you. You receive
          credentials from issuers and store them in a digital wallet (like a
          mobile app). You control when and with whom to share your information.
        </p>
        <p>
          When you need to prove something (e.g., that you're over 18 or hold a
          valid certificate), you present the relevant credential to a Verifier.
        </p>
        <p>
          In some systems, you can even present selective or zero-knowledge
          proofs—meaning you can prove something without revealing all the
          underlying data (e.g., prove you're over 18 without showing your exact
          birthdate).
        </p>
      </div>

      <div class="role-section">
        <h3>3. Verifier – The One Who Checks</h3>
        <p>
          The Verifier (sometimes also called a relying party) is the person,
          website, or organization that wants to confirm your credentials. This
          could be a bar checking your age, an employer verifying a certificate,
          or an app ensuring you're a member.
        </p>
        <p>
          The verifier checks your credentials against the data that the Issuer
          has published on the blockchain. This allows them to validate your
          claims (e.g., signature, expiration, revocation status) without
          directly contacting the issuer.
        </p>
      </div>

      <div class="summary-section">
        <h3>How It All Comes Together</h3>
        <ol>
          <li>
            The Issuer writes verification data to the blockchain and gives the
            credential to the Holder.
          </li>
          <li>
            The Holder stores the credential and later presents it to a
            Verifier.
          </li>
          <li>
            The Verifier checks the credential against the public data on the
            blockchain to confirm it is valid and trustworthy.
          </li>
        </ol>

        <p>This model ensures that:</p>
        <ul>
          <li>You stay in control of your data.</li>
          <li>
            The Verifier doesn't need to trust you personally—only the trusted
            Issuer.
          </li>
          <li>
            Your privacy is better protected through selective disclosure.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "../../components/Header.vue";
import trustTriangle from "../../assets/illustrations/trustTriangle.png";
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}

.illustration {
  width: 100%;
  height: auto;
  object-fit: contain;
  transform: scale(1.05);
  margin-bottom: 4rem;
}

.content {
  padding: 0 1.5rem 3rem;
  width: 100%;
  margin: 0 auto;
}

h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: var(--color-text-primary);
}

h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--color-primary);
}

p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
}

.roles {
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 1.5rem 0;
  padding: 0;
  font-weight: 600;
  color: var(--color-primary);
}

.role-section {
  margin-bottom: 2rem;
  padding: 1rem;
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
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
}

li {
  margin-bottom: 0.5rem;
}
</style>
