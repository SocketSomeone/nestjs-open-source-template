import { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } from './library.module-definition';
import { Inject, Logger, Module, OnModuleInit } from '@nestjs/common';
import { LibraryOptions } from './library-options.interface';
import { LibraryService } from './library.service';

@Module({
	providers: [LibraryService],
	exports: [LibraryService]
})
export class LibraryModule extends ConfigurableModuleClass implements OnModuleInit {
	private readonly logger = new Logger(LibraryModule.name);

	@Inject(MODULE_OPTIONS_TOKEN)
	private readonly options: LibraryOptions;

	public onModuleInit() {
		this.logger.log(`LibraryModule initialized with options: ${JSON.stringify(this.options)}`);
	}
}
