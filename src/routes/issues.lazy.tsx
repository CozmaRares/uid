import { PageTitle, SectionTitle } from "@/components/headings";
import { createLazyFileRoute } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createLazyFileRoute("/issues")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="space-y-8">
      <PageTitle className="border-b py-4">Report an Issue</PageTitle>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="hidden md:block col-start-2 w-4/5 space-y-8">
          <SectionTitle>Help Cluj become a better place</SectionTitle>
          <p className="text-gray-600 text-lg">
            Your issue will be reviewed by our team and we will respond to you
            as soon as possible.
          </p>
        </div>
        <div className="row-start-1">
        <ReportForm />
        </div>
      </div>
    </main>
  );
}

const formSchema = z.object({
  lastName: z.string().min(1),
  firstName: z.string().min(1),
  email: z.string().email(),
  issue: z.string().min(1),
});
type FormSchema = z.infer<typeof formSchema>;

function ReportForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lastName: "",
      firstName: "",
      email: "",
      issue: "",
    },
  });

  function onSubmit(values: FormSchema) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ion"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Popescu"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="ion.popescu@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="issue"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Issue</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe in a few words the issue you’ve encountered..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
  );
}
