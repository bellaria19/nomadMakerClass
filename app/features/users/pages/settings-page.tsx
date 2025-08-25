import { Form } from "react-router";
import type { Route } from "./+types/settings-page";
import InputPair from "~/components/input-pair";
import { Button } from "~/components/ui/button";
import SelectPair from "~/components/select-pair";
import { useState } from "react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export const meta: Route.MetaFunction = () => [
  { title: "Settings | wemake" },
  {
    name: "description",
    content: "Manage your account settings on wemake",
  },
];

export default function SettingsPage() {
  const [avatar, setAvatar] = useState<string | null>();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setAvatar(URL.createObjectURL(file));
    }
  };
  return (
    <div className="space-y-20">
      <div className="grid grid-cols-6 gap-40">
        <div className="col-span-4">
          <h2 className="text-2xl font-semibold">Edit profile</h2>
          <Form className="flex flex-col w-1/2 gap-5">
            <InputPair
              label="Name"
              description="Your public name"
              required
              id="name"
              name="name"
              placeholder="John Doe"
            />
            <SelectPair
              label="Role"
              description="What role do you do identify the most with"
              name="role"
              placeholder="Select a role"
              options={[
                { label: "Developer", value: "developer" },
                { label: "Designer", value: "designer" },
                { label: "Product Manager", value: "product-manager" },
                { label: "Founder", value: "founder" },
                { label: "Other", value: "other" },
              ]}
            />
            <InputPair
              label="Headline"
              description="An introduction to your profile."
              required
              id="headline"
              name="headline"
              placeholder="John Doe"
              textarea
            />
            <InputPair
              label="Bio"
              description="Your public bio. It will be displayed on your profile page."
              required
              id="bio"
              name="bio"
              placeholder="John Doe"
              textarea
            />
            <Button className="w-full">Update profile</Button>
          </Form>
        </div>
        <aside className="col-span-2 p-6 rounded-lg border shadow-md">
          <Label className="flex flex-col gap-1 items-start">
            Avatar
            <small className="text-muted-foreground">
              This is your public avatar.
            </small>
          </Label>
          <div className="space-y-5">
            <div className="size-40 rounded-full shadow-xl overflow-hidden">
              {avatar ? (
                <img
                  src={avatar}
                  alt="avatar"
                  className="object-cover w-full h-full"
                />
              ) : null}
            </div>

            <Input
              type="file"
              className="w-1/2"
              onChange={onChange}
              required
              name="avatar"
            />
            <div className="flex flex-col text-xs">
              <span className="text-muted-foreground">
                Recommend size: 128 x 128px
              </span>

              <span className="text-muted-foreground">
                Allowed format: PNG, JPEG
              </span>

              <span className="text-muted-foreground">Max file size: 1MB</span>
            </div>
            <Button type="submit" className="w-full">
              Update
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
