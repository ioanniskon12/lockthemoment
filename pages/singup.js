import { useState } from "react";
import styled from "styled-components";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    plan: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.plan) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Sign-up successful!");
        // Redirect to dashboard or login
      } else {
        alert(data.message || "Sign-up failed!");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred!");
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Create an Account</Title>
        <Form onSubmit={handleSubmit}>
          {/* Email Input */}
          <InputWrapper>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </InputWrapper>

          {/* Password Input */}
          <InputWrapper>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
          </InputWrapper>

          {/* Plan Selection */}
          <PlanSelection>
            <Label>Select a Plan</Label>
            <PlanOptions>
              <PlanCard
                selected={formData.plan === "free"}
                onClick={() => setFormData({ ...formData, plan: "free" })}
              >
                Free Plan
              </PlanCard>
              <PlanCard
                selected={formData.plan === "50-euro"}
                onClick={() => setFormData({ ...formData, plan: "50-euro" })}
              >
                €50 Plan
              </PlanCard>
              <PlanCard
                selected={formData.plan === "100-euro"}
                onClick={() => setFormData({ ...formData, plan: "100-euro" })}
              >
                €100 Plan
              </PlanCard>
            </PlanOptions>
          </PlanSelection>

          {/* Submit Button */}
          <SubmitButton type="submit">Sign Up</SubmitButton>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9f9f9;
`;

const FormWrapper = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #333333;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #555555;
  margin-bottom: 0.5rem;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 1rem;
  color: #333333;

  &:focus {
    outline: none;
    border-color: #0070f3;
    box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.2);
  }
`;

const PlanSelection = styled.div`
  margin-bottom: 1rem;
`;

const PlanOptions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PlanCard = styled.div`
  flex: 1;
  margin: 0 0.5rem;
  padding: 1rem;
  border: 2px solid ${(props) => (props.selected ? "#0070f3" : "#cccccc")};
  border-radius: 8px;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => (props.selected ? "#0070f3" : "#333333")};
  cursor: pointer;

  &:hover {
    border-color: #0070f3;
    color: #0070f3;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem;
  background-color: #0070f3;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #005bb5;
  }
`;
