'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import Conditional from './ConditionalRendering'

const formSchema = z.object({
	username: z
		.string()
		.min(2, {
			message: 'Username must be at least 2 characters',
		})
		.max(50, {
			message: 'Username cannot be longer than 50 characters',
		}),
	password: z
		.string()
		.min(2, {
			message: 'Username must be at least 2 characters',
		})
		.max(50, {
			message: 'Username cannot be longer than 50 characters',
		}),
    email: z
		.string()
		.min(2, {
			message: 'Username must be at least 2 characters',
		})
		.max(50, {
			message: 'Username cannot be longer than 50 characters',
		}),
})

export function ProfileForm({ source }: { source: string }) {
	const canShowField = source === 'registration'
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			password: '',
            email: ''
		},
	})

	return (
		<Form {...form} >
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="shadcn" {...field} />
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
                <FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input type='password' {...field} />
							</FormControl>
							<FormDescription>
								Type a password
                            </FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Conditional showWhen={canShowField}>

                <FormField
					
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input type='email' {...field} />
							</FormControl>
							<FormDescription>
								Type your email
                            </FormDescription>
							<FormMessage />
						</FormItem>
					)}
					/>
					</Conditional>
					<Button type="submit">Submit</Button>
				<Button type="submit" variant='secondary'>Secondary</Button>
					<Button type="submit" variant='outline'>Outline</Button>
					<Button type="submit" variant='ghost'>Ghost</Button>
				<Button type="submit" variant='destructive'>Destructive</Button>
			</form>
		</Form>
	)
}

function onSubmit(values: z.infer<typeof formSchema>) {
	console.log(values)
}
