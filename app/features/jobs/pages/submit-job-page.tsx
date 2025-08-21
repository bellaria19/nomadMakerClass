import { Hero } from "~/components/hero-section";
import type { Route } from "./+types/submit-job-page";
import { Form } from "react-router";
import InputPair from "~/components/input-pair";
import SelectPair from "~/components/select-pair";
import {
  JOB_TYPES,
  LOCATION_TYPES,
  SALARY_RANGE,
} from "~/features/jobs/constants";
import { Button } from "~/components/ui/button";

export const meta: Route.MetaFunction = () => [
  { title: "Submit Job | wemake" },
  {
    name: "description",
    content: "Submit a new job posting on wemake",
  },
];

export default function SubmitJobPage() {
  return (
    <div>
      <Hero
        title="Post a Job"
        description="Reach out to the best developers in teh world"
      />

      <Form className="max-w-screen-2xl flex flex-col gap-10 items-center mx-auto">
        <div className="grid grid-cols-3 gap-10">
          <InputPair
            label="Position"
            description="(40 characters max)"
            name="position"
            maxLength={40}
            type="text"
            required
            placeholder="i.e Senior React Developer"
          />
          <InputPair
            id="overview"
            label="Overview"
            description="(400 characters max)"
            name="overview"
            maxLength={400}
            type="text"
            required
            placeholder="i.e We are looking for a Senior React Developer"
            textarea
          />
          <InputPair
            id="responsibilities"
            label="Responsibilities"
            description="(400 characters max, comma separated)"
            name="responsibilities"
            maxLength={400}
            type="text"
            required
            placeholder="i.e Implement new features, Maintain code quality, etc."
            textarea
          />
          <InputPair
            id="qualifications"
            label="Qualifications"
            description="(400 characters max, comma separated)"
            name="qualifications"
            maxLength={400}
            type="text"
            required
            placeholder="i.e 3+ years of experience, Strong TypeScript skills, etc."
            textarea
          />
          <InputPair
            id="benefits"
            label="Benefits"
            description="(400 characters max, comma separated)"
            name="benefits"
            maxLength={400}
            type="text"
            required
            placeholder="i.e Flexible working hours, Health insurance, etc."
            textarea
          />
          <InputPair
            id="skills"
            label="Skills"
            description="(400 characters max, comma separated)"
            name="skills"
            maxLength={400}
            type="text"
            required
            placeholder="i.e React, TypeScript, etc."
            textarea
          />
          <InputPair
            id="companyName"
            label="Company Name"
            description="(40 characters max)"
            name="companyName"
            maxLength={40}
            type="text"
            required
            placeholder="i.e wemake"
          />
          <InputPair
            id="companyLogoUrl"
            label="Company Logo URL"
            description="(40 characters max)"
            name="companyLogoUrl"
            type="url"
            required
            placeholder="i.e https://wemake.services/logo.png"
          />
          <InputPair
            id="companyLocation"
            label="Company Location"
            description="(40 characters max)"
            name="companyLocation"
            maxLength={40}
            type="text"
            required
            placeholder="i.e Remote, New York, etc."
          />
          <InputPair
            id="applyUrl"
            label="Apply URL"
            description="(40 characters max)"
            name="applyUrl"
            maxLength={40}
            type="url"
            required
            placeholder="i.e https://wemake.services/apply"
          />
          <SelectPair
            label="Job Type"
            description="Select the type of job"
            name="jobType"
            required
            placeholder="Select the type of job"
            options={JOB_TYPES.map((type) => ({
              label: type.label,
              value: type.value,
            }))}
          />
          <SelectPair
            label="Job Location"
            description="Select the location of the job"
            name="jobLocation"
            required
            placeholder="Select the location of the job"
            options={LOCATION_TYPES.map((location) => ({
              label: location.label,
              value: location.value,
            }))}
          />
          <SelectPair
            label="Salary Range"
            description="Select the salary range of the job"
            name="salaryRange"
            required
            placeholder="Select the salary range of the job"
            options={SALARY_RANGE.map((salary) => ({
              label: salary,
              value: salary,
            }))}
          />
        </div>
        <Button type="submit" className="w-full max-w-sm" size="lg">
          Post job for $100
        </Button>
      </Form>
    </div>
  );
}
