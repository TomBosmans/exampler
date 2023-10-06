import HTML from "../html"
import Button from "./_components/button"
import Input from "./_components/input"

export default function SignUpPage() {
  return (
    <HTML title="Sign up">
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            class="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Create a new account
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" hx-post="/sign-up">
            <div>
              <label
                for="first_name"
                class="block text-sm font-medium leading-6"
              >
                First name
              </label>
              <div class="mt-2">
                <Input
                  id="first_name"
                  name="first_name"
                  required="true"
                  class="w-full"
                />
              </div>
            </div>

            <div>
              <label
                for="last_name"
                class="block text-sm font-medium leading-6"
              >
                Last name
              </label>
              <div class="mt-2">
                <Input
                  id="last_name"
                  name="last_name"
                  required="true"
                  class="w-full"
                />
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium leading-6">
                Email address
              </label>
              <div class="mt-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required="true"
                  class="w-full"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6"
                >
                  Password
                </label>
              </div>
              <div class="mt-2">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required="true"
                  class="w-full"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password_confirmation"
                  class="block text-sm font-medium leading-6"
                >
                  Password Confirmation
                </label>
              </div>
              <div class="mt-2">
                <Input
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  autocomplete="current-password"
                  required="true"
                  class="w-full"
                />
              </div>
            </div>

            <div>
              <Button type="submit" class="w-full">
                Sign up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </HTML>
  )
}
